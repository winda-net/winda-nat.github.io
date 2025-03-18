<?php
// 设置响应头
header('Content-Type: application/json');

// 检查请求方法
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => '方法不允许']);
    exit;
}

// 获取POST数据
$data = json_decode(file_get_contents('php://input'), true);

// 验证必填字段
$requiredFields = ['productId', 'productName', 'quantity', 'name', 'address', 'phone', 'email', 'notes'];
foreach ($requiredFields as $field) {
    if (empty($data[$field]) && $field !== 'notes') {
        http_response_code(400);
        echo json_encode(['error' => "缺少必填字段: $field"]);
        exit;
    }
}

// 准备邮件内容
$to = 'info@windapharm.com'; // 替换为您的邮箱
$subject = '新订单通知 - ' . $data['productName'];

$message = '<html><body>';
$message .= '<h2>新订单通知</h2>';
$message .= '<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">';
$message .= '<tr><th>产品ID</th><td>' . $data['productId'] . '</td></tr>';
$message .= '<tr><th>产品名称</th><td>' . $data['productName'] . '</td></tr>';
$message .= '<tr><th>订购数量</th><td>' . $data['quantity'] . ' kg</td></tr>';
$message .= '<tr><th>客户姓名</th><td>' . $data['name'] . '</td></tr>';
$message .= '<tr><th>地址</th><td>' . $data['address'] . '</td></tr>';
$message .= '<tr><th>电话</th><td>' . $data['phone'] . '</td></tr>';
$message .= '<tr><th>电子邮箱</th><td>' . $data['email'] . '</td></tr>';
$message .= '<tr><th>备注</th><td>' . (empty($data['notes']) ? '无' : $data['notes']) . '</td></tr>';
$message .= '<tr><th>订单时间</th><td>' . date('Y-m-d H:i:s') . '</td></tr>';
$message .= '</table>';
$message .= '</body></html>';

// 设置邮件头
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: " . $data['email'] . "\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 发送邮件
$mailSent = mail($to, $subject, $message, $headers);

// 记录订单到文件（备份）
$logFile = 'orders/order_' . date('YmdHis') . '_' . $data['productId'] . '.json';
if (!file_exists('orders')) {
    mkdir('orders', 0755, true);
}
file_put_contents($logFile, json_encode($data, JSON_PRETTY_PRINT));

if ($mailSent) {
    // 邮件发送成功
    echo json_encode(['success' => true, 'message' => '订单已提交成功']);
} else {
    // 邮件发送失败
    http_response_code(500);
    echo json_encode(['error' => '订单提交失败，请稍后重试']);
}
?> 