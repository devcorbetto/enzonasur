<?php
/**
 * PHPMailer - PHP email creation and transport class.
 * PHP Version 5.4
 * @package PHPMailer
 * @link https://github.com/PHPMailer/PHPMailer/ The PHPMailer GitHub project
 * @author Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
 * @author Jim Jagielski (jimjag) <jimjag@gmail.com>
 * @author Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>
 * @author Brent R. Matzelle (original founder)
 * @copyright 2012 - 2014 Marcus Bointon
 * @copyright 2010 - 2012 Jim Jagielski
 * @copyright 2004 - 2009 Andy Prevost
 * @license http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License
 * @note This program is distributed in the hope that it will be useful - WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.
 */

/**
 * PHPMailerOAuthGoogle - Wrapper for League OAuth2 Google provider.
 * @package PHPMailer
 * @author @sherryl4george
 * @author Marcus Bointon (@Synchro) <phpmailer@synchromedia.co.uk>
 * @link https://github.com/thephpleague/oauth2-client
 */
class PHPMailerOAuthGoogle
{
    private $oauthUserEmail = '';
    private $oauthRefreshToken = '';
    private $oauthClientId = '';
    private $oauthClientSecret = '';

    /**
     * @param string $UserEmail
     * @param string $ClientSecret
     * @param string $ClientId
     * @param string $RefreshToken
     */
    public function __construct(
        $UserEmail,
        $ClientSecret,
        $ClientId,
        $RefreshToken
    ) {
        $this->oauthClientId = $ClientId;
        $this->oauthClientSecret = $ClientSecret;
        $this->oauthRefreshToken = $RefreshToken;
        $this->oauthUserEmail = $UserEmail;
    }

    private function getProvider()
    {
        return new League\OAuth2\Client\Provider\Google([
            'clientId' => $this->oauthClientId,
            'clientSecret' => $this->oauthClientSecret
        ]);
    }

    private function getGrant()
    {
        return new \League\OAuth2\Client\Grant\RefreshToken();
    }

    private function getToken()
    {
        $provider = $this->getProvider();
        $grant = $this->getGrant();
        return $provider->getAccessToken($grant, ['refresh_token' => $this->oauthRefreshToken]);
    }

    public function getOauth64()
    {
        $token = $this->getToken();
        return base64_encode("user=" . $this->oauthUserEmail . "\001auth=Bearer " . $token . "\001\001");
    }
}
<section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>