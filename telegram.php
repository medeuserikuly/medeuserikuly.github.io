<?php

/* https://api.telegram.org/bot6168182963:AAFiXVSxrkiBCKieYqFVJfPbI1-NpYvbySY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$textarea = $_POST['textarea'];
$budget = $_POST['budget'];
$income = $_POST['income'];
$format = $_POST['format'];
$investor = $_POST['investor'];
$job = $_POST['job'];
$project = $_POST['project'];
$deep = $_POST['deep'];
$role = $_POST['role'];
$room = $_POST['room'];
$link = $_POST['link'];

$token = "6168182963:AAFiXVSxrkiBCKieYqFVJfPbI1-NpYvbySY";
$chat_id = "-957371330";
$arr = array(
  'Имя пользователя: ' => $name,
  'Город: ' => $city,
  'Телефон: ' => $phone,
  'email: ' => $email,
  'Почему хотите открыть Tuysqan Cafe?: ' => $textarea,
  'На какой бюджет открытия расчитываете?: ' => $budget,
  'Какой ожидаете ежемесячный доход?: ' => $income,
  'Предприятие какого формата хотели бы открыть?: ' => $format,
  'Источник привлекаемых средств для открытия: ' => $investor,
  'Род деятельности. Чем сейчас занимаетесь?: ' => $job,
  'Есть ли у вас кофейня или аналогичный проект в сфере общественного питания?: ' => $project,
  'Насколько глубоко вы готовы погружаться в процессы открытия и запуска предприятия?: ' => $deep,
  'Насколько глубоко готовы погружаться в процессы после запуска предприятия? Планируемая роль?: ' => $role,
  'Есть ли у вас на примете помещение для открытия?: ' => $room,
  'Ссылка на ваш Instagram или другую соц. сеть.: ' => $link,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "ErrorErrorErrorError";
// }
?>