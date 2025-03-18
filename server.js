const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(bodyParser.json());
app.use(express.static('.')); // 提供静态文件

// 创建订单目录
const ordersDir = path.join(__dirname, 'orders');
if (!fs.existsSync(ordersDir)) {
    fs.mkdirSync(ordersDir);
}

// 配置邮件发送
const transporter = nodemailer.createTransport({
    service: 'gmail', // 或其他邮件服务
    auth: {
        user: 'your-email@gmail.com', // 替换为您的邮箱
        pass: 'your-password' // 替换为您的密码或应用密码
    }
});

// 处理订单提交
app.post('/api/submit-order', (req, res) => {
    const data = req.body;
    
    // 验证必填字段
    const requiredFields = ['productId', 'productName', 'quantity', 'name', 'address', 'phone', 'email'];
    for (const field of requiredFields) {
        if (!data[field]) {
            return res.status(400).json({ error: `缺少必填字段: ${field}` });
        }
    }
    
    // 准备邮件内容
    const mailOptions = {
        from: 'your-email@gmail.com', // 替换为您的邮箱
        to: 'info@windapharm.com', // 替换为接收订单的邮箱
        subject: `新订单通知 - ${data.productName}`,
        html: `
            <h2>新订单通知</h2>
            <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
                <tr><th>产品ID</th><td>${data.productId}</td></tr>
                <tr><th>产品名称</th><td>${data.productName}</td></tr>
                <tr><th>订购数量</th><td>${data.quantity} kg</td></tr>
                <tr><th>客户姓名</th><td>${data.name}</td></tr>
                <tr><th>地址</th><td>${data.address}</td></tr>
                <tr><th>电话</th><td>${data.phone}</td></tr>
                <tr><th>电子邮箱</th><td>${data.email}</td></tr>
                <tr><th>备注</th><td>${data.notes || '无'}</td></tr>
                <tr><th>订单时间</th><td>${new Date().toLocaleString()}</td></tr>
            </table>
        `
    };
    
    // 发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('邮件发送失败:', error);
            return res.status(500).json({ error: '订单提交失败，请稍后重试' });
        }
        
        // 记录订单到文件
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const orderFile = path.join(ordersDir, `order_${timestamp}_${data.productId}.json`);
        fs.writeFileSync(orderFile, JSON.stringify(data, null, 2));
        
        console.log('邮件发送成功:', info.response);
        res.json({ success: true, message: '订单已提交成功' });
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
}); 