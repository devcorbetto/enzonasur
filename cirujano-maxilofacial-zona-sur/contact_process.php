<?php

    $to = "fatonnavdiu@gmail.com";
    $from = $_REQUEST['contact_fname'];
    $name = $_REQUEST['contact_femail'];
    $headers = "From: $from";
    $subject = "Hi Doctor, You have a message from" . $from;

    $fields = array();
    $fields{"First Name"} = "contact_fname";
    $fields{"Last Name"} = "contact_lname";
    $fields{"Email"} = "contact_femail";
    $fields{"Phone Name"} = "contact_fphone";
    $fields{"Message"} = "contact_fmsg";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
<section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>