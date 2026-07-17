<?php require("PHPMailer/PHPMailerAutoload.php");

// ADD your Email and Name
$recipientEmail='your@email';
$recipientName='your Name';

//collect the posted variables into local variables before calling $mail = new mailer

$senderName = $_POST['contact-name'];
$senderPhone = $_POST['contact-phone'];
$senderMessage= $_POST['contact-message'];
$senderSubject = 'New Message From ' . $senderName;

//Create a new PHPMailer instance
$mail = new PHPMailer();

//Set who the message is to be sent from
$mail->setFrom($recipientEmail, $recipientName);
//Set an alternative reply-to address
$mail->addReplyTo($senderEmail,$senderName);
//Set who the message is to be sent to
$mail->addAddress($senderEmail, $senderName );
//Set the subject line
$mail->Subject = $senderSubject;

$mail->Body = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

$mail->MsgHTML($body);
$mail->AddAddress($recipientEmail, $recipientName);

//$mail-&gt;AddAttachment("images/phpmailer.gif"); // attachment
//$mail-&gt;AddAttachment("images/phpmailer_mini.gif"); // attachment

//now make those variables the body of the emails
$message = '<html><body>';
$message .= '<table rules="all" style="border:1px solid #666;width:300px;" cellpadding="10">';
$message .= ($senderName) ? "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $senderName . "</td></tr>" : '';
$message .= ($senderEmail) ?"<tr><td><strong>Email:</strong> </td><td>" . $senderEmail . "</td></tr>" : '';
$message .= ($senderPhone) ?"<tr><td><strong>Phone:</strong> </td><td>" . $senderPhone . "</td></tr>" : '';
$message .= ($senderMessage) ?"<tr><td><strong>Email:</strong> </td><td>" . $senderMessage . "</td></tr>" : '';

$message .= "</table>";
$message .= "<section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>
<section class="dc-internal-links" style="padding:28px 0;background:#fff;border-top:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2 style="font-size:1.35rem;margin-bottom:12px;">Explorar servicios relacionados</h2><p style="margin-bottom:12px;">También podés revisar otros recursos del ecosistema En Zona Sur:</p><p><a href="/marketing-digital-colombia.html">Marketing digital</a> · <a href="/salud-en-colombia.html">Salud en Colombia</a> · <a href="/abogados-en-colombia.html">Abogados en Colombia</a> · <a href="/servicios-locales-bogota.html">Servicios locales Bogotá</a> · <a href="/alojamientos-y-turismo-colombia.html">Alojamientos y turismo</a></p></div></section>
<a class="dc-floating-whatsapp" href="https://wa.me/573180435023" aria-label="Consultar por WhatsApp" style="position:fixed;right:18px;bottom:18px;z-index:9999;background:#22c55e;color:#07131f;padding:12px 16px;border-radius:999px;font-weight:700;text-decoration:none;box-shadow:0 10px 25px rgba(0,0,0,.18);">WhatsApp</a>
</body></html>";

$mail->Body = $message;

// $mail->Body="
// Name:$senderName<br/>
// Email: $senderEmail<br/>
// Suburb: $senderSubject<br/>
// Message: $senderMessage";

if(!$mail->Send()) {
	echo '<div class="alert alert-danger" role="alert">Error: '. $mail->ErrorInfo.'</div>';
} else {
	echo '<div class="alert alert-success" role="alert">Thank you. We will contact you shortly.</div>';
}
?>