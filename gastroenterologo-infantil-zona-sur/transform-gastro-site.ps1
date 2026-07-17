$ErrorActionPreference = 'Stop'

function Replace-Block {
  param(
    [string]$Content,
    [string]$Pattern,
    [string]$Replacement
  )

  return [regex]::Replace(
    $Content,
    $Pattern,
    [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $Replacement },
    [System.Text.RegularExpressions.RegexOptions]::Singleline
  )
}

function Build-MedicalClinicSchema {
  param(
    [string]$IdUrl,
    [string]$Name,
    [string]$Url,
    [string]$Description,
    [string]$Locality,
    [object]$AreaServed,
    [string[]]$Services,
    [string]$Specialty = 'Pediatric Gastroenterology'
  )

  $schema = [ordered]@{
    '@context' = 'https://schema.org'
    '@type' = 'MedicalClinic'
    '@id' = "$IdUrl#medicalclinic"
    name = $Name
    url = $Url
    description = $Description
    medicalSpecialty = $Specialty
    telephone = '+57 xxxxxxxxxx'
    address = [ordered]@{
      '@type' = 'PostalAddress'
      addressCountry = 'CO'
      addressLocality = $Locality
    }
    areaServed = $AreaServed
    availableService = $Services
  }

  return ($schema | ConvertTo-Json -Depth 10)
}

function Build-FaqSchema {
  param([object[]]$Faqs)

  $schema = [ordered]@{
    '@context' = 'https://schema.org'
    '@type' = 'FAQPage'
    mainEntity = @()
  }

  foreach ($faq in $Faqs) {
    $schema.mainEntity += [ordered]@{
      '@type' = 'Question'
      name = $faq.Question
      acceptedAnswer = [ordered]@{
        '@type' = 'Answer'
        text = $faq.Answer
      }
    }
  }

  return ($schema | ConvertTo-Json -Depth 10)
}

function Build-AccordionHtml {
  param([object[]]$Faqs)

  $items = for ($i = 0; $i -lt $Faqs.Count; $i++) {
    $faq = $Faqs[$i]
    $n = $i + 1
    $opened = if ($i -eq 0) { ' opened' } else { '' }
    $show = if ($i -eq 0) { ' show' } else { '' }
@"
            <div class="accordion-item$opened">
              <div class="accordion__header" data-toggle="collapse" data-target="#faq$n">
                <a class="accordion__title" href="javascript:void(0);">$($faq.Question)</a>
              </div>
              <div id="faq$n" class="collapse$show" data-parent="#accordion">
                <div class="accordion__body">
                  <p>$($faq.Answer)</p>
                </div>
              </div>
            </div>
"@
  }

  return ($items -join "`n")
}

function Build-Header {
  param(
    [switch]$IsHome,
    [string]$LocationText
  )

  $inicio = if ($IsHome) { '#inicio' } else { 'index.html#inicio' }
  $nosotros = if ($IsHome) { '#sobre-nosotros' } else { 'index.html#sobre-nosotros' }
  $servicios = if ($IsHome) { '#servicios' } else { 'index.html#servicios' }
  $especialidades = if ($IsHome) { '#especialidades' } else { 'index.html#especialidades' }
  $faq = if ($IsHome) { '#faq' } else { 'index.html#faq' }
  $blog = if ($IsHome) { '#blog' } else { 'index.html#blog' }
  $contacto = if ($IsHome) { '#contacto' } else { 'index.html#contacto' }

@"
    <header class="header header-layout1">
      <div class="header-topbar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12">
              <ul class="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                <li><i class="icon-phone"></i><a href="tel:+57xxxxxxxxxx">Atención: +57 xxxxxxxxxx</a></li>
                <li><i class="icon-location"></i><a href="$contacto">$LocationText</a></li>
                <li><i class="icon-clock"></i><a href="$contacto">Lun - Vie: 8:00 am - 7:00 pm</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html#inicio">
            <img src="assets/images/logo/logo-light.png" class="logo-light" alt="Logo Gastroenterología pediátrica">
            <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="Logo Gastroenterología pediátrica">
          </a>
          <button class="navbar-toggler" type="button"><span class="menu-lines"><span></span></span></button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item"><a href="$inicio" class="nav__item-link active">Inicio</a></li>
              <li class="nav__item"><a href="$nosotros" class="nav__item-link">Nosotros</a></li>
              <li class="nav__item"><a href="$servicios" class="nav__item-link">Servicios</a></li>
              <li class="nav__item"><a href="$especialidades" class="nav__item-link">Especialidades</a></li>
              <li class="nav__item has-dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Ciudades</a>
                <ul class="dropdown-menu">
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-bogota.html" class="nav__item-link">Gastroenterólogo infantil en Bogotá</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-medellin.html" class="nav__item-link">Gastroenterólogo infantil en Medellín</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-cali.html" class="nav__item-link">Gastroenterólogo infantil en Cali</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-barranquilla.html" class="nav__item-link">Gastroenterólogo infantil en Barranquilla</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-cartagena.html" class="nav__item-link">Gastroenterólogo infantil en Cartagena</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-bucaramanga.html" class="nav__item-link">Gastroenterólogo infantil en Bucaramanga</a></li>
                </ul>
              </li>
              <li class="nav__item"><a href="$faq" class="nav__item-link">FAQ</a></li>
              <li class="nav__item"><a href="$blog" class="nav__item-link">Blog</a></li>
              <li class="nav__item"><a href="$contacto" class="nav__item-link">Contacto</a></li>
            </ul>
            <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times"></i></button>
          </div>
          <div class="d-none d-xl-flex align-items-center position-relative ml-30">
            <a href="$contacto" class="btn btn__primary btn__rounded ml-30"><i class="icon-calendar"></i><span>Solicitar valoración</span></a>
          </div>
        </div>
      </nav>
    </header>
"@
}

function Build-HomeSections {
  param(
    [string]$HeroH1,
    [string]$HeroAlt,
    [string]$Slide1Desc,
    [string]$Slide2Title,
    [string]$Slide2Desc,
    [string]$LocationLabel,
    [object[]]$Faqs,
    [string]$WidgetDesc,
    [string]$LocalVariant
  )

  $faqHtml = Build-AccordionHtml $Faqs

@"
    <section id="inicio" class="slider">
      <div class="slick-carousel m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 700,"fade": true,"cssEase": "linear"}'>
        <div class="slide-item align-v-h">
          <div class="bg-img"><img src="assets/images/sliders/1.jpg" alt="$HeroAlt"></div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div class="slide__content">
                  <h1 class="slide__title">$HeroH1</h1>
                  <p class="slide__desc">$Slide1Desc</p>
                  <ul class="features-list list-unstyled mb-0 d-flex flex-wrap">
                    <li class="feature-item">
                      <div class="feature__icon"><i class="icon-heart"></i></div>
                      <h2 class="feature__title">Dolor abdominal</h2>
                    </li>
                    <li class="feature-item">
                      <div class="feature__icon"><i class="icon-medicine"></i></div>
                      <h2 class="feature__title">Estreñimiento</h2>
                    </li>
                    <li class="feature-item">
                      <div class="feature__icon"><i class="icon-heart2"></i></div>
                      <h2 class="feature__title">Reflujo</h2>
                    </li>
                    <li class="feature-item">
                      <div class="feature__icon"><i class="icon-blood-test"></i></div>
                      <h2 class="feature__title">Alergias alimentarias</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-item align-v-h">
          <div class="bg-img"><img src="assets/images/sliders/2.jpg" alt="Consulta digestiva pediátrica"></div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div class="slide__content">
                  <h2 class="slide__title">$Slide2Title</h2>
                  <p class="slide__desc">$Slide2Desc</p>
                  <a href="#contacto" class="btn btn__white btn__rounded"><span>Agendar consulta</span><i
                      class="icon-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-info py-0">
      <div class="container">
        <div class="row row-no-gutter boxes-wrapper">
          <div class="col-sm-12 col-md-4">
            <div class="contact-box d-flex">
              <div class="contact__icon"><i class="icon-call3"></i></div>
              <div class="contact__content">
                <h2 class="contact__title">Consulta prioritaria</h2>
                <p class="contact__desc">Solicita valoración si hay dolor abdominal repetido, estreñimiento persistente, vómito frecuente, diarrea crónica o rechazo alimentario.</p>
                <a href="tel:+57xxxxxxxxxx" class="phone__number"><i class="icon-phone"></i> <span>+57
                    xxxxxxxxxx</span></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="contact-box d-flex">
              <div class="contact__icon"><i class="icon-health-report"></i></div>
              <div class="contact__content">
                <h2 class="contact__title">Valoración digestiva</h2>
                <p class="contact__desc">Atención para diagnóstico, segunda opinión, control y seguimiento de problemas digestivos infantiles en $LocationLabel.</p>
                <a href="#contacto" class="btn btn__white btn__outlined btn__rounded"><span>Solicitar
                    valoración</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="contact-box d-flex">
              <div class="contact__icon"><i class="icon-heart2"></i></div>
              <div class="contact__content">
                <h2 class="contact__title">Horarios de atención</h2>
                <ul class="time__list list-unstyled mb-0">
                  <li><span>Lunes - Viernes</span><span>8:00 am - 7:00 pm</span></li>
                  <li><span>Sábado</span><span>9:00 am - 1:00 pm</span></li>
                  <li><span>Teleconsulta</span><span>Según agenda</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre-nosotros" class="about-layout2 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
            <div class="heading-layout2">
              <h3 class="heading__title mb-60">Salud digestiva infantil con orientación clara y acompañamiento cercano</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-5">
            <div class="text-with-icon">
              <div class="text__icon"><i class="icon-doctor"></i></div>
              <div class="text__content">
                <p class="heading__desc font-weight-bold color-secondary mb-30">La gastroenterología infantil se enfoca en el diagnóstico y tratamiento de enfermedades del sistema digestivo en bebés, niños y adolescentes. Acompañamos a familias que necesitan orientación por dolor abdominal, estreñimiento, diarrea crónica, reflujo, vómito frecuente, alergias alimentarias, intolerancias y problemas de crecimiento asociados a trastornos digestivos.</p>
                <a href="#contacto" class="btn btn__secondary btn__rounded mb-70"><span>Consultar disponibilidad</span> <i
                    class="icon-arrow-right"></i></a>
              </div>
            </div>
            <div class="video-banner-layout2 bg-overlay">
              <img src="assets/images/about/2.jpg" alt="Atención en gastroenterología pediátrica" class="w-100">
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-7">
            <div class="about__text bg-white">
              <p class="heading__desc mb-30">Trabajamos con una valoración integral que considera síntomas, alimentación, antecedentes familiares, evolución del crecimiento y estudios previos. El objetivo es ofrecer respuestas claras, tratamientos personalizados y seguimiento cercano para mejorar la salud digestiva infantil.</p>
              <p class="heading__desc mb-30">$LocalVariant</p>
              <ul class="list-items list-unstyled">
                <li>Evaluación de dolor abdominal infantil, hábitos intestinales y señales de alarma.</li>
                <li>Orientación en reflujo, vómito frecuente, diarrea crónica y distensión abdominal.</li>
                <li>Seguimiento de alergias alimentarias, intolerancias, celiaquía y malabsorción.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicios" class="services-layout1 services-carousel">
      <div class="bg-img"><img src="assets/images/backgrounds/2.jpg" alt="Servicios de gastroenterología infantil"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-60">
              <h2 class="heading__subtitle">Atención pediátrica especializada en $LocationLabel</h2>
              <h3 class="heading__title">Servicios principales</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="slick-carousel"
              data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>
              <div class="service-item">
                <div class="service__icon"><i class="icon-head"></i><i class="icon-head"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Dolor abdominal recurrente</h4>
                  <p class="service__desc">Evaluación de niños con dolor abdominal frecuente, cólicos, distensión, náuseas o molestias digestivas que afectan su alimentación, sueño o actividades diarias.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Dolor recurrente</li>
                    <li>Náuseas y cólicos</li>
                    <li>Señales de alarma</li>
                  </ul>
                </div>
              </div>
              <div class="service-item">
                <div class="service__icon"><i class="icon-heart"></i><i class="icon-heart"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Estreñimiento infantil</h4>
                  <p class="service__desc">Valoración y manejo del estreñimiento en bebés, niños y adolescentes, incluyendo hábitos intestinales, dolor al evacuar, retención y episodios recurrentes.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Dolor al evacuar</li>
                    <li>Retención de heces</li>
                    <li>Hábitos intestinales</li>
                  </ul>
                </div>
              </div>
              <div class="service-item">
                <div class="service__icon"><i class="icon-microscope"></i><i class="icon-microscope"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Diarrea crónica</h4>
                  <p class="service__desc">Estudio de diarrea persistente, cambios en las deposiciones, pérdida de peso, malabsorción o sospecha de intolerancias y enfermedades digestivas.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Diarrea persistente</li>
                    <li>Malabsorción</li>
                    <li>Pérdida de peso</li>
                  </ul>
                </div>
              </div>
              <div class="service-item">
                <div class="service__icon"><i class="icon-dropper"></i><i class="icon-dropper"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Reflujo gastroesofágico</h4>
                  <p class="service__desc">Atención para bebés y niños con regurgitación, vómito frecuente, ardor, tos asociada al reflujo, rechazo alimentario o molestias después de comer.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Vómito frecuente</li>
                    <li>Rechazo alimentario</li>
                    <li>Tos asociada</li>
                  </ul>
                </div>
              </div>
              <div class="service-item">
                <div class="service__icon"><i class="icon-heart3"></i><i class="icon-heart3"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Alergias e intolerancias alimentarias</h4>
                  <p class="service__desc">Orientación para síntomas digestivos relacionados con leche, gluten, lactosa u otros alimentos, con enfoque diagnóstico y recomendaciones claras para la familia.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Leche y lactosa</li>
                    <li>Gluten</li>
                    <li>Alimentos desencadenantes</li>
                  </ul>
                </div>
              </div>
              <div class="service-item">
                <div class="service__icon"><i class="icon-heart2"></i><i class="icon-heart2"></i></div>
                <div class="service__content">
                  <h4 class="service__title">Enfermedad celíaca y malabsorción</h4>
                  <p class="service__desc">Evaluación de sospecha de celiaquía, baja ganancia de peso, anemia, diarrea, distensión abdominal o dificultades para absorber nutrientes.</p>
                  <ul class="list-items list-items-layout1 list-unstyled">
                    <li>Celiaquía</li>
                    <li>Anemia y distensión</li>
                    <li>Absorción de nutrientes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="notes border-top pt-60 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="note font-weight-bold"><i class="far fa-file-alt color-primary"></i><span>La valoración de gastroenterología pediátrica ayuda a diferenciar molestias funcionales, intolerancias, inflamación, infecciones y otros trastornos digestivos en niños.</span><a href="#faq" class="btn btn__link btn__secondary"><span>Ver preguntas frecuentes</span><i class="icon-arrow-right"></i></a></div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="info__meta d-flex flex-wrap justify-content-between align-items-center">
              <div class="testimonials__rating">
                <div class="testimonials__rating-inner d-flex align-items-center"><span class="total__rate">4.9</span>
                  <div><span class="overall__rate">Acompañamiento claro para familias</span><span> y seguimiento según la evolución digestiva.</span></div>
                </div>
              </div>
              <a href="#contacto" class="btn btn__primary btn__rounded"><span>Contactar ahora</span> <i
                  class="icon-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="especialidades" class="team-layout2 pb-80">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-40">
              <h3 class="heading__title">Especialidades más consultadas</h3>
              <p class="heading__desc">Temas frecuentes de gastroenterología pediátrica y salud digestiva infantil.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="slick-carousel"
              data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "arrows": false, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/1.jpg" alt="Dolor abdominal recurrente en niños"></div>
                <div class="member__info">
                  <h5 class="member__name">Dolor abdominal recurrente</h5>
                  <p class="member__job">Evaluación clínica y digestiva</p>
                  <p class="member__desc">Revisión de síntomas, desencadenantes y señales de alarma abdominal.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/2.jpg" alt="Estreñimiento infantil"></div>
                <div class="member__info">
                  <h5 class="member__name">Estreñimiento infantil</h5>
                  <p class="member__job">Hábitos intestinales y dolor</p>
                  <p class="member__desc">Valoración de retención, heces duras, fisuras y manejo progresivo.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/3.jpg" alt="Reflujo y vómito frecuente"></div>
                <div class="member__info">
                  <h5 class="member__name">Reflujo gastroesofágico</h5>
                  <p class="member__job">Bebés, niños y adolescentes</p>
                  <p class="member__desc">Orientación para regurgitación, tos asociada, ardor y rechazo alimentario.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/4.jpg" alt="Alergias alimentarias en niños"></div>
                <div class="member__info">
                  <h5 class="member__name">Alergias alimentarias</h5>
                  <p class="member__job">Síntomas y dieta guiada</p>
                  <p class="member__desc">Evaluación de relación entre alimentos, digestión, crecimiento y bienestar.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/5.jpg" alt="Enfermedad celíaca y malabsorción"></div>
                <div class="member__info">
                  <h5 class="member__name">Celiaquía y malabsorción</h5>
                  <p class="member__job">Diarrea, anemia y bajo peso</p>
                  <p class="member__desc">Estudio de absorción intestinal, distensión y sospecha de intolerancias.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="assets/images/team/6.jpg" alt="Colon irritable y trastornos digestivos infantiles"></div>
                <div class="member__info">
                  <h5 class="member__name">Colon irritable infantil</h5>
                  <p class="member__job">Síntomas funcionales digestivos</p>
                  <p class="member__desc">Abordaje de dolor, distensión, cambios en deposiciones y seguimiento clínico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="proceso" class="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary">
      <div class="bg-img"><img src="assets/images/backgrounds/4.jpg" alt="Proceso de valoración digestiva pediátrica"></div>
      <div class="container">
        <div class="row heading heading-layout3">
          <div class="col-12">
            <h2 class="heading__subtitle color-primary">Proceso de atención</h2>
            <h3 class="heading__title color-white">Así funciona la valoración</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="slick-carousel"
              data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}]}'>
              <div class="process-item">
                <span class="process__number">01</span>
                <h4 class="process__title">Síntomas digestivos</h4>
                <p class="process__desc">Recopilamos síntomas, duración del problema, hábitos intestinales, alimentación, antecedentes, medicamentos y estudios previos.</p>
              </div>
              <div class="process-item">
                <span class="process__number">02</span>
                <h4 class="process__title">Historia y alimentación</h4>
                <p class="process__desc">Evaluamos el contexto completo del niño para diferenciar molestias funcionales, intolerancias, infecciones, inflamación u otras causas digestivas.</p>
              </div>
              <div class="process-item">
                <span class="process__number">03</span>
                <h4 class="process__title">Estudios previos</h4>
                <p class="process__desc">Cuando es necesario, orientamos estudios complementarios y explicamos a la familia qué información aporta cada examen.</p>
              </div>
              <div class="process-item">
                <span class="process__number">04</span>
                <h4 class="process__title">Plan y seguimiento</h4>
                <p class="process__desc">Definimos tratamiento, cambios alimentarios, educación familiar y controles según evolución, respuesta y necesidades del paciente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="faq pt-120 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-4">
            <aside class="sidebar has-marign-right">
              <div class="widget widget-help bg-overlay bg-overlay-secondary-gradient">
                <div class="bg-img"><img src="assets/images/banners/5.jpg" alt="Ayuda en gastroenterología pediátrica"></div>
                <div class="widget-content">
                  <div class="widget__icon"><i class="icon-call3"></i></div>
                  <h4 class="widget__title">Acompañamiento para familias</h4>
                  <p class="widget__desc">$WidgetDesc</p>
                  <a href="tel:+57xxxxxxxxxx" class="phone__number"><i class="icon-phone"></i> <span>+57
                        xxxxxxxxxx</span></a>
                </div>
              </div>
              <div class="widget widget-schedule">
                <div class="widget-content">
                  <div class="widget__icon"><i class="icon-charity2"></i></div>
                  <h4 class="widget__title">Horario de atención</h4>
                  <ul class="time__list list-unstyled mb-0">
                    <li><span>Lunes - Viernes</span><span>8:00 am - 7:00 pm</span></li>
                    <li><span>Sábado</span><span>9:00 am - 1:00 pm</span></li>
                    <li><span>Teleconsulta</span><span>Según agenda</span></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-8" id="accordion">
$faqHtml
          </div>
        </div>
      </div>
    </section>

    <section id="blog" class="blog-grid pb-50">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-40">
              <h2 class="heading__subtitle">Recursos de gastroenterología pediátrica</h2>
              <h3 class="heading__title">Artículos recientes</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="dolor-abdominal-recurrente-ninos.html"><img src="assets/images/blog/grid/1.jpg"
                    alt="Dolor abdominal recurrente en niños" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="blog.html">Dolor abdominal</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span
                    class="post__meta-author">Gastroenterología pediátrica</span></div>
                <h4 class="post__title"><a href="dolor-abdominal-recurrente-ninos.html">Dolor abdominal recurrente en niños</a></h4>
                <p class="post__desc">Señales para identificar cuándo el dolor abdominal repetido necesita estudio con gastroenterólogo infantil.</p>
                <a href="dolor-abdominal-recurrente-ninos.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="estrenimiento-infantil-cuando-consultar.html"><img src="assets/images/blog/grid/2.jpg"
                    alt="Estreñimiento infantil" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="blog.html">Estreñimiento</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span
                    class="post__meta-author">Gastroenterología pediátrica</span></div>
                <h4 class="post__title"><a href="estrenimiento-infantil-cuando-consultar.html">Estreñimiento infantil: cuándo consultar</a></h4>
                <p class="post__desc">Cuándo el estreñimiento persistente, el dolor al evacuar o la retención de heces requieren valoración médica.</p>
                <a href="estrenimiento-infantil-cuando-consultar.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="reflujo-gastroesofagico-en-bebes-y-ninos.html"><img src="assets/images/blog/grid/3.jpg"
                    alt="Reflujo gastroesofágico en bebés y niños" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="blog.html">Reflujo</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span
                    class="post__meta-author">Gastroenterología pediátrica</span></div>
                <h4 class="post__title"><a href="reflujo-gastroesofagico-en-bebes-y-ninos.html">Reflujo en bebés y niños: cuándo consultar</a></h4>
                <p class="post__desc">Síntomas frecuentes, rechazo alimentario y signos que orientan a solicitar una valoración digestiva pediátrica.</p>
                <a href="reflujo-gastroesofagico-en-bebes-y-ninos.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-primary">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="footer-widget-about">
                <img src="assets/images/logo/logo-light.png" alt="Gastroenterólogo Infantil Colombia" class="mb-30">
                <p class="color-gray">Consulta de gastroenterología pediátrica en $LocationLabel para dolor abdominal, estreñimiento, reflujo, diarrea crónica y otros problemas digestivos infantiles.</p>
                <a href="#faq" class="btn btn__primary btn__primary-style2 btn__link"><span>Ver FAQ</span> <i class="icon-arrow-right"></i></a>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-widget-nav">
                <h6 class="footer-widget__title">Enlaces internos</h6>
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="index.html">Gastroenterólogo infantil en Colombia</a></li>
                    <li><a href="gastroenterologo-infantil-en-bogota.html">Gastroenterólogo infantil en Bogotá</a></li>
                    <li><a href="gastroenterologo-infantil-en-medellin.html">Gastroenterólogo infantil en Medellín</a></li>
                    <li><a href="gastroenterologo-infantil-en-cali.html">Gastroenterólogo infantil en Cali</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-widget-nav">
                <h6 class="footer-widget__title">Ciudades</h6>
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="gastroenterologo-infantil-en-barranquilla.html">Gastroenterólogo infantil en Barranquilla</a></li>
                    <li><a href="gastroenterologo-infantil-en-cartagena.html">Gastroenterólogo infantil en Cartagena</a></li>
                    <li><a href="gastroenterologo-infantil-en-bucaramanga.html">Gastroenterólogo infantil en Bucaramanga</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="footer-widget-contact" id="contacto">
                <h6 class="footer-widget__title color-heading">Contacto</h6>
                <ul class="contact-list list-unstyled">
                  <li>Colombia</li>
                  <li><a href="tel:+57xxxxxxxxxx">+57 xxxxxxxxxx</a></li>
                  <li><a href="mailto:contacto@digitalescolombia.com">contacto@digitalescolombia.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-secondary">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <p>
                Copyright &copy; <script>document.write(new Date().getFullYear())</script> Gastroenterólogo Infantil Colombia. Todos los derechos reservados. Diseñado por 
                <a href="https://digitalescolombia.com/" target="_blank">digitalescolombia.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
"@
}

function Build-BlogHeader {
  param([string]$Active = 'blog')

@"
    <header class="header header-layout1">
      <div class="header-topbar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-between">
                <ul class="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li><button class="miniPopup-emergency-trigger" type="button">Orientación prioritaria</button>
                    <div id="miniPopup-emergency" class="miniPopup miniPopup-emergency text-center">
                      <div class="emergency__icon"><i class="icon-call3"></i></div>
                      <a href="tel:+57xxxxxxxxxx" class="phone__number"><i class="icon-phone"></i> <span>+57 xxxxxxxxxx</span></a>
                      <p>Información sobre dolor abdominal, estreñimiento, reflujo y problemas digestivos infantiles.</p>
                      <a href="index.html#contacto" class="btn btn__secondary btn__link btn__block"><span>Solicitar valoración</span> <i class="icon-arrow-right"></i></a>
                    </div>
                  </li>
                  <li><i class="icon-phone"></i><a href="tel:+57xxxxxxxxxx">Atención: +57 xxxxxxxxxx</a></li>
                  <li><i class="icon-location"></i><a href="index.html#contacto">Colombia</a></li>
                  <li><i class="icon-clock"></i><a href="index.html#contacto">Lun - Vie: 8:00 am - 7:00 pm</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html#inicio">
            <img src="assets/images/logo/logo-light.png" class="logo-light" alt="Logo Gastroenterología pediátrica">
            <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="Logo Gastroenterología pediátrica">
          </a>
          <button class="navbar-toggler" type="button"><span class="menu-lines"><span></span></span></button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item"><a href="index.html#inicio" class="nav__item-link">Inicio</a></li>
              <li class="nav__item"><a href="index.html#sobre-nosotros" class="nav__item-link">Nosotros</a></li>
              <li class="nav__item"><a href="index.html#servicios" class="nav__item-link">Servicios</a></li>
              <li class="nav__item"><a href="index.html#especialidades" class="nav__item-link">Especialidades</a></li>
              <li class="nav__item has-dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Ciudades</a>
                <ul class="dropdown-menu">
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-bogota.html" class="nav__item-link">Bogotá</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-medellin.html" class="nav__item-link">Medellín</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-cali.html" class="nav__item-link">Cali</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-barranquilla.html" class="nav__item-link">Barranquilla</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-cartagena.html" class="nav__item-link">Cartagena</a></li>
                  <li class="nav__item"><a href="gastroenterologo-infantil-en-bucaramanga.html" class="nav__item-link">Bucaramanga</a></li>
                </ul>
              </li>
              <li class="nav__item"><a href="index.html#faq" class="nav__item-link">FAQ</a></li>
              <li class="nav__item"><a href="blog.html" class="nav__item-link active">Blog</a></li>
              <li class="nav__item"><a href="index.html#contacto" class="nav__item-link">Contacto</a></li>
            </ul>
            <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times"></i></button>
          </div>
          <div class="d-none d-xl-flex align-items-center position-relative ml-30">
            <a href="index.html#contacto" class="btn btn__primary btn__rounded ml-30"><i class="icon-calendar"></i><span>Agendar consulta</span></a>
          </div>
        </div>
      </nav>
    </header>
"@
}

function Build-BlogFooter {
@"
    <footer class="footer">
      <div class="footer-primary">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="footer-widget-about">
                <img src="assets/images/logo/logo-light.png" alt="Gastroenterólogo Infantil Colombia" class="mb-30">
                <p class="color-gray">Contenido orientado a dolor abdominal, estreñimiento, reflujo y salud digestiva pediátrica en Colombia.</p>
                <a href="index.html#faq" class="btn btn__primary btn__primary-style2 btn__link"><span>Ver FAQ</span> <i class="icon-arrow-right"></i></a>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-widget-nav">
                <h6 class="footer-widget__title">Enlaces internos</h6>
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="index.html#inicio">Inicio</a></li>
                    <li><a href="index.html#sobre-nosotros">Nosotros</a></li>
                    <li><a href="index.html#servicios">Servicios</a></li>
                    <li><a href="index.html#especialidades">Especialidades</a></li>
                    <li><a href="index.html#faq">FAQ</a></li>
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="footer-widget-nav">
                <h6 class="footer-widget__title">Ciudades</h6>
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="gastroenterologo-infantil-en-bogota.html">Gastroenterólogo infantil en Bogotá</a></li>
                    <li><a href="gastroenterologo-infantil-en-medellin.html">Gastroenterólogo infantil en Medellín</a></li>
                    <li><a href="gastroenterologo-infantil-en-cali.html">Gastroenterólogo infantil en Cali</a></li>
                    <li><a href="gastroenterologo-infantil-en-barranquilla.html">Gastroenterólogo infantil en Barranquilla</a></li>
                    <li><a href="gastroenterologo-infantil-en-cartagena.html">Gastroenterólogo infantil en Cartagena</a></li>
                    <li><a href="gastroenterologo-infantil-en-bucaramanga.html">Gastroenterólogo infantil en Bucaramanga</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="footer-widget-contact">
                <h6 class="footer-widget__title color-heading">Contacto</h6>
                <ul class="contact-list list-unstyled">
                  <li>Colombia</li>
                  <li><a href="tel:+57xxxxxxxxxx">+57 xxxxxxxxxx</a></li>
                  <li><a href="mailto:contacto@digitalescolombia.com">contacto@digitalescolombia.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-secondary">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <p>
                Copyright &copy; <script>document.write(new Date().getFullYear())</script> Gastroenterólogo Infantil Colombia. Todos los derechos reservados. Diseñado por 
                <a href="https://digitalescolombia.com/" target="_blank">digitalescolombia.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
"@
}

$indexFaqs = @(
  @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Colombia?'; Answer = 'Es recomendable consultar cuando el niño presenta dolor abdominal recurrente, estreñimiento persistente, diarrea crónica, vómito frecuente, reflujo, pérdida de peso, sangre en las heces, distensión abdominal, rechazo alimentario o sospecha de alergias e intolerancias alimentarias.' },
  @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica?'; Answer = 'La gastroenterología pediátrica atiende trastornos digestivos en bebés, niños y adolescentes, incluyendo dolor abdominal, estreñimiento, diarrea crónica, reflujo, gastritis, alergias alimentarias, intolerancias, enfermedad celíaca, malabsorción, vómito frecuente y problemas de crecimiento relacionados con la digestión.' },
  @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No siempre. El dolor abdominal frecuente puede tener causas funcionales, alimentarias, infecciosas, inflamatorias o emocionales. Una valoración médica ayuda a identificar señales de alarma y definir si se requieren estudios o tratamiento específico.' },
  @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Debe valorarse cuando el estreñimiento es persistente, causa dolor, sangrado, retención de heces, distensión abdominal, pérdida de apetito o afecta la calidad de vida del niño. También conviene consultar si no mejora con medidas básicas.' },
  @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'Algunas señales de alarma son sangre en las heces, vómito persistente, pérdida de peso, fiebre prolongada, dolor que despierta en la noche, diarrea crónica, deshidratación, anemia, crecimiento lento o dolor abdominal intenso y repetido.' },
  @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'El reflujo puede ser común en bebés, pero requiere valoración si hay vómitos frecuentes, rechazo del alimento, bajo aumento de peso, irritabilidad persistente, tos asociada, dificultad para dormir o síntomas que continúan más allá de lo esperado.' },
  @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La evaluación puede incluir historia clínica, relación entre alimentos y síntomas, revisión del crecimiento, estudios de laboratorio y, en algunos casos, pruebas específicas. No se recomienda retirar grupos de alimentos sin orientación médica.' },
  @{ Question = '¿La diarrea crónica en niños debe evaluarse?'; Answer = 'Sí. La diarrea que dura varias semanas, se acompaña de pérdida de peso, dolor, sangre, moco, fiebre, distensión o alteración del crecimiento debe ser evaluada para descartar intolerancias, infecciones, inflamación o malabsorción.' }
)

$cityData = @(
  @{
    File = 'gastroenterologo-infantil-en-bogota.html'
    City = 'Bogotá'
    Slug = 'bogota'
    Description = 'Gastroenterólogo infantil en Bogotá para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias e intolerancias digestivas en niños. Solicita valoración.'
    Keywords = 'gastroenterólogo infantil en Bogotá, gastroenterología pediátrica en Bogotá, gastroenterólogo pediatra Bogotá, dolor abdominal en niños Bogotá, estreñimiento infantil Bogotá, reflujo en bebés Bogotá, alergias alimentarias niños Bogotá'
    SchemaDescription = 'Consulta de gastroenterología infantil en Bogotá para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención especializada en Bogotá para dolor abdominal recurrente, estreñimiento, diarrea crónica, reflujo, vómito frecuente, alergias alimentarias, intolerancias y trastornos digestivos en niños y adolescentes.'
    Slide2Desc = 'En Bogotá revisamos síntomas digestivos, antecedentes, hábitos intestinales, alimentación y estudios previos para orientar diagnósticos claros y planes de manejo personalizados.'
    LocalVariant = 'En Bogotá orientamos a las familias con una revisión ordenada de síntomas digestivos, crecimiento, tolerancia a los alimentos y evolución clínica, para decidir cuándo basta el seguimiento y cuándo se requieren estudios adicionales.'
    WidgetDesc = 'Acompañamos a familias en Bogotá con dudas sobre dolor abdominal, estreñimiento, reflujo, diarrea crónica, vómito frecuente y alergias alimentarias.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Bogotá?'; Answer = 'En Bogotá conviene solicitar valoración cuando el niño tiene dolor abdominal repetido, estreñimiento que no mejora, diarrea de varias semanas, vómitos frecuentes, distensión, reflujo o pérdida de peso.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Bogotá?'; Answer = 'La consulta en Bogotá aborda dolor abdominal, estreñimiento, diarrea crónica, reflujo, gastritis, alergias alimentarias, intolerancias, celiaquía, malabsorción y otros trastornos digestivos infantiles.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No necesariamente. En Bogotá se revisa si el dolor se relaciona con estreñimiento, alimentación, estrés, infecciones o señales de inflamación para decidir el estudio más adecuado.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Si el estreñimiento en Bogotá produce dolor, sangrado, retención, distensión o afecta el apetito y la rutina del niño, es prudente pedir una consulta especializada.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'Sangre en las heces, vómito persistente, fiebre prolongada, bajo peso, anemia, dolor nocturno o diarrea con moco son hallazgos que justifican valoración prioritaria en Bogotá.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Bogotá se recomienda revisar el reflujo cuando hay rechazo del alimento, mala ganancia de peso, irritabilidad marcada, tos asociada o síntomas que persisten más de lo esperado.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La consulta en Bogotá analiza qué alimentos desencadenan síntomas, cómo está creciendo el niño y si hacen falta exámenes para orientar una dieta segura y bien supervisada.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Bogotá?'; Answer = 'Puedes solicitar una valoración de gastroenterología infantil en Bogotá por teléfono o a través de los enlaces de contacto para revisar disponibilidad presencial o por teleconsulta.' }
    )
  },
  @{
    File = 'gastroenterologo-infantil-en-medellin.html'
    City = 'Medellín'
    Slug = 'medellin'
    Description = 'Consulta con gastroenterólogo infantil en Medellín para niños con dolor abdominal, estreñimiento, reflujo, diarrea crónica, vómito frecuente o alergias alimentarias.'
    Keywords = 'gastroenterólogo infantil en Medellín, gastroenterología pediátrica en Medellín, gastroenterólogo pediatra Medellín, dolor abdominal en niños Medellín, estreñimiento infantil Medellín, reflujo en bebés Medellín, alergias alimentarias niños Medellín'
    SchemaDescription = 'Consulta de gastroenterología infantil en Medellín para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención especializada en Medellín para dolor abdominal recurrente, estreñimiento, diarrea crónica, reflujo, vómito frecuente, alergias alimentarias e intolerancias en bebés, niños y adolescentes.'
    Slide2Desc = 'En Medellín evaluamos síntomas digestivos, antecedentes, alimentación y estudios previos para orientar diagnósticos claros y definir un manejo individualizado.'
    LocalVariant = 'En Medellín damos prioridad a una valoración integral que une síntomas, alimentación, antecedentes familiares y respuesta a tratamientos previos para construir un plan digestivo pediátrico realista.'
    WidgetDesc = 'Resolvemos dudas en Medellín sobre estreñimiento infantil, reflujo, diarrea crónica, dolor abdominal y síntomas relacionados con alimentos.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Medellín?'; Answer = 'En Medellín se recomienda consultar cuando hay dolor abdominal recurrente, deposiciones difíciles o muy frecuentes, reflujo persistente, vómitos repetidos o cambios en el peso y el apetito.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Medellín?'; Answer = 'La atención en Medellín incluye estreñimiento, diarrea crónica, reflujo, dolor abdominal, gastritis, alergias alimentarias, celiaquía, malabsorción y sangrado digestivo en niños.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No. En Medellín la valoración busca diferenciar molestias funcionales de cuadros que requieren estudios por inflamación, intolerancia, infección o alarma digestiva.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Cuando el niño en Medellín retiene heces, evacúa con dolor, presenta fisuras, sangrado o no mejora con hábitos básicos, es aconsejable revisar el caso con un especialista.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'Dolor que despierta en la noche, sangre en las heces, diarrea prolongada, deshidratación, vómito persistente, bajo peso y crecimiento lento son señales que deben estudiarse en Medellín.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Medellín conviene evaluar el reflujo si el bebé rechaza el alimento, no gana peso como se espera, llora mucho al comer o sigue con síntomas más allá de lo habitual.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La gastroenterología pediátrica en Medellín revisa el vínculo entre síntomas y alimentos, el estado nutricional y los estudios disponibles antes de retirar grupos enteros de la dieta.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Medellín?'; Answer = 'Puedes agendar una valoración de gastroenterología infantil en Medellín mediante contacto telefónico y revisar opciones de consulta presencial o seguimiento por teleconsulta.' }
    )
  },
  @{
    File = 'gastroenterologo-infantil-en-cali.html'
    City = 'Cali'
    Slug = 'cali'
    Description = 'Gastroenterólogo infantil en Cali para problemas digestivos en niños: dolor abdominal, estreñimiento, diarrea, reflujo, gastritis, intolerancias y alergias alimentarias.'
    Keywords = 'gastroenterólogo infantil en Cali, gastroenterología pediátrica en Cali, gastroenterólogo pediatra Cali, dolor abdominal en niños Cali, estreñimiento infantil Cali, reflujo en bebés Cali, alergias alimentarias niños Cali'
    SchemaDescription = 'Consulta de gastroenterología infantil en Cali para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención en Cali para niños con dolor abdominal recurrente, estreñimiento, diarrea, reflujo, gastritis, intolerancias alimentarias y otros trastornos digestivos frecuentes.'
    Slide2Desc = 'En Cali estudiamos antecedentes, alimentación, síntomas y estudios previos para orientar tratamientos claros en salud digestiva pediátrica.'
    LocalVariant = 'En Cali acompañamos a las familias con explicaciones claras sobre síntomas digestivos, cambios en la dieta, utilidad de los exámenes y seguimiento según la respuesta clínica del niño.'
    WidgetDesc = 'Acompañamiento en Cali para familias con dudas por dolor abdominal, estreñimiento, gastritis, reflujo y diarrea crónica en niños.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Cali?'; Answer = 'En Cali es buena idea consultar cuando el niño tiene dolor abdominal repetido, estreñimiento de larga evolución, reflujo, diarrea persistente, distensión o vómito frecuente.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Cali?'; Answer = 'La consulta pediátrica digestiva en Cali evalúa estreñimiento, diarrea crónica, reflujo, intolerancias, alergias alimentarias, gastritis, celiaquía y trastornos de absorción.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No siempre. En Cali la valoración ayuda a reconocer cuándo el dolor puede ser funcional y cuándo hay datos que sugieren inflamación, infección o una intolerancia digestiva.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Si en Cali el estreñimiento causa dolor, heces muy duras, sangrado, retención o limita la vida diaria del niño, conviene programar una valoración especializada.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'En Cali deben estudiarse síntomas como pérdida de peso, anemia, fiebre prolongada, dolor intenso repetido, sangre en las heces o diarrea de varias semanas.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Cali puede necesitar valoración si el reflujo se acompaña de mala ganancia de peso, tos, irritabilidad persistente, despertares frecuentes o rechazo alimentario.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La atención en Cali integra historia clínica, patrón de síntomas, crecimiento y estudios de apoyo para evitar restricciones innecesarias y orientar el manejo correcto.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Cali?'; Answer = 'Puedes solicitar una cita de gastroenterología infantil en Cali mediante los datos de contacto del sitio y confirmar disponibilidad para consulta o seguimiento.' }
    )
  },
  @{
    File = 'gastroenterologo-infantil-en-barranquilla.html'
    City = 'Barranquilla'
    Slug = 'barranquilla'
    Description = 'Gastroenterólogo infantil en Barranquilla para valoración de dolor abdominal, estreñimiento, diarrea crónica, reflujo, vómito frecuente y salud digestiva pediátrica.'
    Keywords = 'gastroenterólogo infantil en Barranquilla, gastroenterología pediátrica en Barranquilla, gastroenterólogo pediatra Barranquilla, dolor abdominal en niños Barranquilla, estreñimiento infantil Barranquilla, reflujo en bebés Barranquilla, alergias alimentarias niños Barranquilla'
    SchemaDescription = 'Consulta de gastroenterología infantil en Barranquilla para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención en Barranquilla para estreñimiento infantil, dolor abdominal, vómito frecuente, diarrea crónica, reflujo y otros problemas digestivos que afectan el bienestar del niño.'
    Slide2Desc = 'En Barranquilla valoramos síntomas digestivos, historia clínica, patrón de alimentación y exámenes previos para orientar el diagnóstico de forma práctica y clara.'
    LocalVariant = 'En Barranquilla buscamos que cada familia entienda qué síntomas requieren vigilancia, qué cambios alimentarios pueden ayudar y cuándo es necesario avanzar con estudios específicos.'
    WidgetDesc = 'Orientación en Barranquilla para niños con dolor abdominal, diarrea crónica, reflujo, estreñimiento o sospecha de intolerancias alimentarias.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Barranquilla?'; Answer = 'En Barranquilla vale la pena consultar si el niño presenta dolor abdominal frecuente, diarrea por semanas, estreñimiento persistente, reflujo molesto o vómitos repetidos.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Barranquilla?'; Answer = 'La consulta en Barranquilla atiende trastornos digestivos infantiles como estreñimiento, dolor abdominal, reflujo, gastritis, alergias alimentarias, celiaquía y malabsorción.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No. En Barranquilla muchos casos son funcionales, pero una revisión médica ayuda a descartar inflamación, infección, estreñimiento severo u otras causas relevantes.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Si el niño en Barranquilla evacúa con dolor, retiene heces, tiene sangrado o el problema se repite pese a medidas básicas, conviene buscar valoración digestiva pediátrica.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'Dolor intenso, deshidratación, sangre en las heces, pérdida de peso, diarrea prolongada, fiebre o vómito persistente son signos que deben revisarse sin demora en Barranquilla.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Barranquilla se aconseja consultar si el reflujo interfiere con la alimentación, el descanso, la ganancia de peso o se acompaña de tos y llanto persistente.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La valoración en Barranquilla se apoya en historia clínica, síntomas digestivos, crecimiento y estudios dirigidos para confirmar si realmente existe alergia o intolerancia.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Barranquilla?'; Answer = 'Puedes pedir una valoración de gastroenterología infantil en Barranquilla desde los canales de contacto del sitio y revisar horarios disponibles para consulta.' }
    )
  },
  @{
    File = 'gastroenterologo-infantil-en-cartagena.html'
    City = 'Cartagena'
    Slug = 'cartagena'
    Description = 'Consulta de gastroenterología infantil en Cartagena para estreñimiento, dolor abdominal, reflujo, diarrea crónica, alergias alimentarias y trastornos digestivos pediátricos.'
    Keywords = 'gastroenterólogo infantil en Cartagena, gastroenterología pediátrica en Cartagena, gastroenterólogo pediatra Cartagena, dolor abdominal en niños Cartagena, estreñimiento infantil Cartagena, reflujo en bebés Cartagena, alergias alimentarias niños Cartagena'
    SchemaDescription = 'Consulta de gastroenterología infantil en Cartagena para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención digestiva pediátrica en Cartagena para dolor abdominal, estreñimiento, reflujo, diarrea crónica, vómito frecuente y molestias relacionadas con la alimentación.'
    Slide2Desc = 'En Cartagena revisamos síntomas, antecedentes, estudios y hábitos alimentarios para ofrecer orientación diagnóstica y seguimiento en gastroenterología infantil.'
    LocalVariant = 'En Cartagena la valoración se enfoca en entender la evolución del síntoma digestivo, la tolerancia a los alimentos y el impacto sobre el crecimiento para plantear un manejo personalizado.'
    WidgetDesc = 'Acompañamos en Cartagena a familias con dudas sobre digestión infantil, alergias alimentarias, estreñimiento, reflujo o diarrea crónica.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Cartagena?'; Answer = 'En Cartagena conviene consultar cuando el niño tiene dolor abdominal repetitivo, estreñimiento que causa dolor, diarrea prolongada, reflujo persistente o síntomas que afectan su alimentación.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Cartagena?'; Answer = 'La atención en Cartagena incluye dolor abdominal, estreñimiento, reflujo, diarrea crónica, gastritis, celiaquía, intolerancias, alergias alimentarias y otros trastornos digestivos pediátricos.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No siempre. En Cartagena se revisa si el dolor se asocia con estreñimiento, ciertos alimentos, estrés o señales de inflamación que ameriten estudios adicionales.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Cuando el estreñimiento en Cartagena genera retención, sangrado, distensión, poco apetito o un patrón repetitivo que no mejora, es recomendable valorar al niño.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'En Cartagena deben atenderse pronto signos como sangre en las heces, vómito continuo, bajo peso, diarrea crónica, fiebre o dolor que despierta al niño en la noche.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Cartagena la revisión es útil cuando el reflujo se acompaña de tos, rechazo alimentario, mala ganancia de peso, irritabilidad o síntomas que se prolongan.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La evaluación en Cartagena toma en cuenta los alimentos sospechosos, el patrón de síntomas y el crecimiento del niño antes de indicar pruebas o restricciones dietarias.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Cartagena?'; Answer = 'Puedes agendar una valoración de gastroenterología infantil en Cartagena usando los datos de contacto publicados y revisar la disponibilidad de consulta.' }
    )
  },
  @{
    File = 'gastroenterologo-infantil-en-bucaramanga.html'
    City = 'Bucaramanga'
    Slug = 'bucaramanga'
    Description = 'Gastroenterólogo infantil en Bucaramanga para niños con dolor abdominal, estreñimiento, reflujo, diarrea crónica, distensión abdominal o intolerancias alimentarias.'
    Keywords = 'gastroenterólogo infantil en Bucaramanga, gastroenterología pediátrica en Bucaramanga, gastroenterólogo pediatra Bucaramanga, dolor abdominal en niños Bucaramanga, estreñimiento infantil Bucaramanga, reflujo en bebés Bucaramanga, alergias alimentarias niños Bucaramanga'
    SchemaDescription = 'Consulta de gastroenterología infantil en Bucaramanga para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños.'
    HeroDesc = 'Atención en Bucaramanga para niños con dolor abdominal, estreñimiento, reflujo, distensión abdominal, diarrea crónica y sospecha de intolerancias alimentarias.'
    Slide2Desc = 'En Bucaramanga evaluamos síntomas, historia clínica, alimentación y estudios previos para orientar diagnósticos y seguimiento en gastroenterología pediátrica.'
    LocalVariant = 'En Bucaramanga adaptamos cada plan al contexto del niño, con recomendaciones claras sobre alimentación, manejo inicial, estudios útiles y control de señales de alarma digestiva.'
    WidgetDesc = 'Resolución de dudas en Bucaramanga sobre estreñimiento, diarrea crónica, reflujo, dolor abdominal, vómito frecuente e intolerancias digestivas.'
    Faqs = @(
      @{ Question = '¿Cuándo consultar con un gastroenterólogo infantil en Bucaramanga?'; Answer = 'En Bucaramanga es recomendable consultar cuando el niño presenta dolor abdominal recurrente, estreñimiento, reflujo molesto, diarrea prolongada, distensión o vómitos frecuentes.' },
      @{ Question = '¿Qué problemas atiende la gastroenterología pediátrica en Bucaramanga?'; Answer = 'La consulta en Bucaramanga trata problemas digestivos infantiles como estreñimiento, dolor abdominal, diarrea crónica, reflujo, intolerancias, alergias alimentarias y celiaquía.' },
      @{ Question = '¿El dolor abdominal frecuente en niños siempre es grave?'; Answer = 'No. En Bucaramanga la evaluación clínica sirve para identificar si se trata de un problema funcional o si existen datos que orientan a inflamación, infección u otra causa digestiva.' },
      @{ Question = '¿Cuándo el estreñimiento infantil necesita valoración médica?'; Answer = 'Si el estreñimiento en Bucaramanga es persistente, doloroso, produce sangrado, distensión o altera la rutina del niño, se aconseja consultar con gastroenterología infantil.' },
      @{ Question = '¿Qué señales de alarma digestiva deben preocupar a los padres?'; Answer = 'Dolor abdominal intenso, sangre en las heces, deshidratación, fiebre, pérdida de peso, anemia o diarrea de larga duración deben valorarse de forma oportuna en Bucaramanga.' },
      @{ Question = '¿El reflujo en bebés requiere gastroenterólogo infantil?'; Answer = 'En Bucaramanga puede requerir valoración si el bebé tiene irritabilidad marcada, tos, rechazo alimentario, poca ganancia de peso o síntomas persistentes.' },
      @{ Question = '¿Cómo se estudian las alergias o intolerancias alimentarias?'; Answer = 'La valoración en Bucaramanga analiza alimentos desencadenantes, síntomas digestivos, crecimiento y exámenes disponibles para orientar una dieta segura y bien dirigida.' },
      @{ Question = '¿Cómo agendar una valoración de gastroenterología infantil en Bucaramanga?'; Answer = 'Puedes solicitar una cita de gastroenterología infantil en Bucaramanga por los canales de contacto del sitio y confirmar disponibilidad de agenda.' }
    )
  }
)

$indexSource = Get-Content -Raw -Path 'index.html'
$indexHtml = $indexSource
$indexHtml = Replace-Block $indexHtml '<meta name="description"[\s\S]*?\/>' '<meta name="description" content="Gastroenterólogo infantil en Colombia para dolor abdominal, estreñimiento, diarrea crónica, reflujo, alergias alimentarias, intolerancias y problemas digestivos en niños. Agenda tu valoración." />'
$indexHtml = Replace-Block $indexHtml '<meta name="keywords"[\s\S]*?\/>' '<meta name="keywords" content="gastroenterologo infantil en Colombia, gastroenterologia pediatrica Colombia, gastroenterologo pediatra, dolor abdominal en niños, estreñimiento infantil, diarrea cronica niños, reflujo en bebes, alergias alimentarias niños" />'
$indexHtml = Replace-Block $indexHtml '<link rel="canonical" href="[^"]*" />' '<link rel="canonical" href="https://digitalescolombia.com/gastroenterologo-infantil-colombia" />'
$indexHtml = Replace-Block $indexHtml '<title>[\s\S]*?<\/title>' '<title>Gastroenterólogo infantil en Colombia | Gastroenterología pediátrica</title>'

$indexMedical = Build-MedicalClinicSchema `
  -IdUrl 'https://digitalescolombia.com/gastroenterologo-infantil-colombia' `
  -Name 'Gastroenterólogo infantil en Colombia' `
  -Url 'https://digitalescolombia.com/gastroenterologo-infantil-colombia' `
  -Description 'Consulta de gastroenterología infantil en Colombia para dolor abdominal, estreñimiento, diarrea crónica, reflujo, vómito frecuente, alergias alimentarias, intolerancias y trastornos digestivos pediátricos.' `
  -Locality 'Colombia' `
  -AreaServed @(
    @{ '@type' = 'Country'; name = 'Colombia' },
    @{ '@type' = 'City'; name = 'Bogotá' },
    @{ '@type' = 'City'; name = 'Medellín' },
    @{ '@type' = 'City'; name = 'Cali' },
    @{ '@type' = 'City'; name = 'Barranquilla' },
    @{ '@type' = 'City'; name = 'Cartagena' },
    @{ '@type' = 'City'; name = 'Bucaramanga' }
  ) `
  -Services @(
    'Consulta de gastroenterología infantil',
    'Dolor abdominal recurrente',
    'Estreñimiento infantil',
    'Diarrea crónica en niños',
    'Reflujo gastroesofágico',
    'Alergias alimentarias',
    'Intolerancias alimentarias',
    'Enfermedad celíaca',
    'Malabsorción',
    'Vómito frecuente'
  )
$indexFaqJson = Build-FaqSchema $indexFaqs

$indexHtml = Replace-Block $indexHtml '<script type="application/ld\+json">[\s\S]*?"@type":\s*"MedicalClinic"[\s\S]*?<\/script>' "<script type=`"application/ld+json`">`n$indexMedical`n  </script>"
$indexHtml = Replace-Block $indexHtml '<script type="application/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>' "<script type=`"application/ld+json`">`n$indexFaqJson`n  </script>"
$indexHtml = Replace-Block $indexHtml '<header class="header header-layout1">[\s\S]*?<\/header>' (Build-Header -IsHome -LocationText 'Colombia y teleconsulta')
$indexHtml = Replace-Block $indexHtml '<section id="inicio" class="slider">[\s\S]*?<footer class="footer">' ((Build-HomeSections `
  -HeroH1 'Gastroenterólogo infantil en Colombia' `
  -HeroAlt 'Consulta de gastroenterología infantil en Colombia' `
  -Slide1Desc 'Atención especializada para dolor abdominal recurrente, estreñimiento, diarrea crónica, reflujo, vómito frecuente, alergias alimentarias, intolerancias y trastornos digestivos en bebés, niños y adolescentes.' `
  -Slide2Title 'Consulta digestiva pediátrica' `
  -Slide2Desc 'Evaluamos síntomas, antecedentes, alimentación y estudios previos para orientar diagnósticos claros y planes de manejo personalizados en salud digestiva infantil.' `
  -LocationLabel 'Colombia' `
  -Faqs $indexFaqs `
  -WidgetDesc 'Resolvemos dudas sobre dolor abdominal, estreñimiento, reflujo en bebés, diarrea crónica, alergias alimentarias e intolerancias digestivas.' `
  -LocalVariant 'Valoramos al niño de forma completa para entender qué papel tienen la alimentación, los hábitos intestinales, la evolución de los síntomas y los antecedentes familiares en cada problema digestivo.') + "`n`n    <footer class=`"footer`">")
$indexHtml = Set-Content -Path 'index.html' -Encoding utf8 -Value $indexHtml

foreach ($city in $cityData) {
  $cityHtml = Get-Content -Raw -Path 'index.html'
  $cityUrl = "https://digitalescolombia.com/gastroenterologo-infantil-$($city.Slug)"
  $cityMedical = Build-MedicalClinicSchema `
    -IdUrl $cityUrl `
    -Name "Gastroenterólogo infantil en $($city.City)" `
    -Url $cityUrl `
    -Description $city.SchemaDescription `
    -Locality $city.City `
    -AreaServed @{ '@type' = 'City'; name = $city.City } `
    -Services @(
      'Consulta de gastroenterología infantil',
      'Dolor abdominal recurrente',
      'Estreñimiento infantil',
      'Diarrea crónica',
      'Reflujo gastroesofágico',
      'Alergias e intolerancias alimentarias'
    )
  $cityFaqJson = Build-FaqSchema $city.Faqs
  $cityHtml = Replace-Block $cityHtml '<meta name="description" content="[^"]*" />' "<meta name=`"description`" content=`"$($city.Description)`" />"
  $cityHtml = Replace-Block $cityHtml '<meta name="keywords" content="[^"]*" />' "<meta name=`"keywords`" content=`"$($city.Keywords)`" />"
  $cityHtml = Replace-Block $cityHtml '<link rel="canonical" href="[^"]*" />' "<link rel=`"canonical`" href=`"$cityUrl`" />"
  $cityHtml = Replace-Block $cityHtml '<title>[\s\S]*?<\/title>' "<title>Gastroenterólogo infantil en $($city.City) | Gastroenterología pediátrica</title>"
  $cityHtml = Replace-Block $cityHtml '<script type="application/ld\+json">[\s\S]*?"@type":\s*"MedicalClinic"[\s\S]*?<\/script>' "<script type=`"application/ld+json`">`n$cityMedical`n  </script>"
  $cityHtml = Replace-Block $cityHtml '<script type="application/ld\+json">[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>' "<script type=`"application/ld+json`">`n$cityFaqJson`n  </script>"
  $cityHtml = Replace-Block $cityHtml '<header class="header header-layout1">[\s\S]*?<\/header>' (Build-Header -LocationText "$($city.City) y teleconsulta")
  $cityHtml = Replace-Block $cityHtml '<section id="inicio" class="slider">[\s\S]*?<footer class="footer">' ((Build-HomeSections `
    -HeroH1 "Gastroenterólogo infantil en $($city.City)" `
    -HeroAlt "Consulta de gastroenterología infantil en $($city.City)" `
    -Slide1Desc $city.HeroDesc `
    -Slide2Title 'Consulta digestiva pediátrica' `
    -Slide2Desc $city.Slide2Desc `
    -LocationLabel $city.City `
    -Faqs $city.Faqs `
    -WidgetDesc $city.WidgetDesc `
    -LocalVariant $city.LocalVariant) + "`n`n    <footer class=`"footer`">")
  $cityHtml = Set-Content -Path $city.File -Encoding utf8 -Value $cityHtml
}

$blogHtml = Get-Content -Raw -Path 'blog.html'
$blogHtml = Replace-Block $blogHtml '<meta name="description" content="[^"]*" />' '<meta name="description" content="Artículos de gastroenterología pediátrica sobre dolor abdominal, estreñimiento infantil, reflujo y otros problemas digestivos en niños en Colombia." />'
$blogHtml = Replace-Block $blogHtml '<link rel="canonical" href="[^"]*" />' '<link rel="canonical" href="https://digitalescolombia.com/blog-gastroenterologia-pediatrica-colombia" />'
$blogHtml = Replace-Block $blogHtml '<title>[\s\S]*?<\/title>' '<title>Blog de gastroenterología pediátrica | Gastroenterólogo infantil en Colombia</title>'
$blogHtml = Replace-Block $blogHtml '<header class="header header-layout1">[\s\S]*?<\/header>' (Build-BlogHeader)
$blogHtml = Replace-Block $blogHtml '<section class="page-title page-title-layout5 bg-overlay">[\s\S]*?<section class="blog-grid pt-120 pb-90">' @"
    <section class="page-title page-title-layout5 bg-overlay">
      <div class="bg-img"><img src="assets/images/backgrounds/1.jpg" alt="Blog de gastroenterología pediátrica"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="pagetitle__heading">Blog de gastroenterología pediátrica</h1>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section class="blog-grid pt-120 pb-90">
"@
$blogHtml = Replace-Block $blogHtml '<section class="blog-grid pt-120 pb-90">[\s\S]*?<footer class="footer">' @"
    <section class="blog-grid pt-120 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="dolor-abdominal-recurrente-ninos.html"><img src="assets/images/blog/grid/1.jpg" alt="Dolor abdominal recurrente en niños" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="dolor-abdominal-recurrente-ninos.html">Dolor abdominal</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span class="post__meta-author">Guía para familias</span></div>
                <h4 class="post__title"><a href="dolor-abdominal-recurrente-ninos.html">Dolor abdominal recurrente en niños</a></h4>
                <p class="post__desc">Conoce cuándo el dolor abdominal repetido necesita valoración con gastroenterólogo infantil y qué señales deben vigilar los padres.</p>
                <a href="dolor-abdominal-recurrente-ninos.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="estrenimiento-infantil-cuando-consultar.html"><img src="assets/images/blog/grid/2.jpg" alt="Estreñimiento infantil" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="estrenimiento-infantil-cuando-consultar.html">Estreñimiento</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span class="post__meta-author">Valoración médica</span></div>
                <h4 class="post__title"><a href="estrenimiento-infantil-cuando-consultar.html">Estreñimiento infantil: cuándo consultar</a></h4>
                <p class="post__desc">El estreñimiento infantil puede requerir valoración médica cuando es persistente, doloroso o afecta la calidad de vida del niño.</p>
                <a href="estrenimiento-infantil-cuando-consultar.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="post-item">
              <div class="post__img"><a href="reflujo-gastroesofagico-en-bebes-y-ninos.html"><img src="assets/images/blog/grid/3.jpg" alt="Reflujo gastroesofágico en bebés y niños" loading="lazy"></a></div>
              <div class="post__body">
                <div class="post__meta-cat"><a href="reflujo-gastroesofagico-en-bebes-y-ninos.html">Reflujo</a></div>
                <div class="post__meta d-flex"><span class="post__meta-date">Abril 29, 2026</span><span class="post__meta-author">Señales de alerta</span></div>
                <h4 class="post__title"><a href="reflujo-gastroesofagico-en-bebes-y-ninos.html">Reflujo en bebés y niños</a></h4>
                <p class="post__desc">Información para padres sobre reflujo gastroesofágico, síntomas frecuentes y cuándo consultar con gastroenterología infantil.</p>
                <a href="reflujo-gastroesofagico-en-bebes-y-ninos.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
"@
$blogHtml = Replace-Block $blogHtml '<footer class="footer">[\s\S]*?<\/footer>' (Build-BlogFooter)
Set-Content -Path 'blog.html' -Encoding utf8 -Value $blogHtml

function New-Post {
  param(
    [string]$SourceFile,
    [string]$TargetFile,
    [string]$Canonical,
    [string]$Title,
    [string]$MetaDescription,
    [string]$Headline,
    [string]$ImageAlt,
    [string]$Category,
    [string]$MetaAuthor,
    [string[]]$Paragraphs,
    [string[]]$RelatedTitles,
    [string[]]$RelatedLinks,
    [string[]]$RelatedAlts,
    [string]$ImageUrl
  )

  $html = Get-Content -Raw -Path $SourceFile
  $schema = [ordered]@{
    '@context' = 'https://schema.org'
    '@type' = 'BlogPosting'
    headline = $Headline
    description = $MetaDescription
    image = $ImageUrl
    author = [ordered]@{
      '@type' = 'Organization'
      name = 'Gastroenterólogo Infantil Colombia'
    }
    publisher = [ordered]@{
      '@type' = 'Organization'
      name = 'Gastroenterólogo Infantil Colombia'
      logo = [ordered]@{
        '@type' = 'ImageObject'
        url = 'https://digitalescolombia.com/assets/images/logo/logo-dark.png'
      }
    }
    datePublished = '2026-04-29'
    dateModified = '2026-04-29'
    mainEntityOfPage = [ordered]@{
      '@type' = 'WebPage'
      '@id' = $Canonical
    }
  } | ConvertTo-Json -Depth 10

  $descHtml = ($Paragraphs | ForEach-Object { "<p>$_</p>" }) -join ''
  $related = @"
<div class="widget-post-item d-flex align-items-center"><div class="widget-post__img"><a href="$($RelatedLinks[0])"><img src="assets/images/blog/grid/$(if ($RelatedLinks[0] -like '*estrenimiento*') {'2'} elseif ($RelatedLinks[0] -like '*reflujo*') {'3'} else {'1'}).jpg" alt="$($RelatedAlts[0])"></a></div><div class="widget-post__content"><span class="widget-post__date">Abril 29, 2026</span><h4 class="widget-post__title"><a href="$($RelatedLinks[0])">$($RelatedTitles[0])</a></h4></div></div><div class="widget-post-item d-flex align-items-center"><div class="widget-post__img"><a href="$($RelatedLinks[1])"><img src="assets/images/blog/grid/$(if ($RelatedLinks[1] -like '*estrenimiento*') {'2'} elseif ($RelatedLinks[1] -like '*reflujo*') {'3'} else {'1'}).jpg" alt="$($RelatedAlts[1])"></a></div><div class="widget-post__content"><span class="widget-post__date">Abril 29, 2026</span><h4 class="widget-post__title"><a href="$($RelatedLinks[1])">$($RelatedTitles[1])</a></h4></div></div>
"@

  $html = Replace-Block $html '<meta name="description" content="[^"]*" />' "<meta name=`"description`" content=`"$MetaDescription`" />"
  $html = Replace-Block $html '<link rel="canonical" href="[^"]*" />' "<link rel=`"canonical`" href=`"$Canonical`" />"
  $html = Replace-Block $html '<title>[\s\S]*?<\/title>' "<title>$Title</title>"
  $html = Replace-Block $html '<script type="application/ld\+json">[\s\S]*?<\/script>' "<script type=`"application/ld+json`">`n$schema`n  </script>"
  $html = Replace-Block $html '<header class="header header-layout1">[\s\S]*?<\/header>' (Build-Header)
  $html = Replace-Block $html '<section class="page-title pt-30 pb-30 text-center">[\s\S]*?<section class="blog blog-single pt-0 pb-80">' @"
    <section class="page-title pt-30 pb-30 text-center"><div class="container"><ol class="breadcrumb mb-0"><li class="breadcrumb-item"><a href="index.html">Inicio</a></li><li class="breadcrumb-item"><a href="blog.html">Blog</a></li><li class="breadcrumb-item active" aria-current="page">$Category</li></ol></div></section>
    <section class="blog blog-single pt-0 pb-80">
"@
  $html = Replace-Block $html '<section class="blog blog-single pt-0 pb-80">[\s\S]*?<footer class="footer">' @"
    <section class="blog blog-single pt-0 pb-80"><div class="container"><div class="row"><div class="col-lg-8"><div class="post-item mb-0"><div class="post__img"><img src="assets/images/blog/grid/$(if ($TargetFile -like '*estrenimiento*') {'2'} elseif ($TargetFile -like '*reflujo*') {'3'} else {'1'}).jpg" alt="$ImageAlt" loading="lazy"></div><div class="post__body pb-0"><div class="post__meta-cat"><a href="blog.html">$Category</a></div><div class="post__meta d-flex align-items-center mb-20"><span class="post__meta-date">Abril 29, 2026</span><span class="post__meta-author">$MetaAuthor</span></div><h1 class="post__title mb-30">$Headline</h1><div class="post__desc">$descHtml<p><strong>CTA:</strong> Agendar consulta con gastroenterólogo infantil y recibir orientación clara para el manejo digestivo de tu hijo en Colombia.</p></div></div></div></div><div class="col-lg-4"><aside class="sidebar"><div class="widget widget-posts"><h5 class="widget__title">Artículos relacionados</h5><div class="widget__content">$related</div></div></aside></div></div></div></section>
    <footer class="footer">
"@
  $html = Replace-Block $html '<footer class="footer">[\s\S]*?<\/footer>' (Build-BlogFooter)
  Set-Content -Path $TargetFile -Encoding utf8 -Value $html
}

New-Post -SourceFile 'crecimiento-infantil-cuando-consultar.html' `
  -TargetFile 'dolor-abdominal-recurrente-ninos.html' `
  -Canonical 'https://digitalescolombia.com/dolor-abdominal-recurrente-ninos' `
  -Title 'Dolor abdominal recurrente en niños | Gastroenterología pediátrica' `
  -MetaDescription 'Conoce cuándo el dolor abdominal recurrente en niños requiere valoración con gastroenterólogo infantil y qué señales deben vigilar los padres.' `
  -Headline 'Dolor abdominal recurrente en niños' `
  -ImageAlt 'Dolor abdominal recurrente en niños' `
  -Category 'Dolor abdominal' `
  -MetaAuthor 'Gastroenterología pediátrica' `
  -Paragraphs @(
    'El dolor abdominal recurrente en niños es un motivo de consulta frecuente. No siempre significa una enfermedad grave, pero sí merece valoración cuando se repite, interfiere con la alimentación o altera el sueño, el colegio o las actividades diarias.',
    'Entre las causas frecuentes se encuentran el estreñimiento, la sensibilidad a ciertos alimentos, los cuadros infecciosos, el estrés, el reflujo o los trastornos digestivos funcionales. En algunos casos también es necesario descartar inflamación, gastritis, celiaquía u otras enfermedades digestivas.',
    'La relación con la alimentación puede orientar mucho el estudio. A veces el dolor aparece después de consumir determinados alimentos, junto con distensión, gases, diarrea o estreñimiento. En otros niños predominan los episodios asociados al estrés o a cambios en la rutina intestinal.',
    'Las señales de alarma incluyen sangre en las heces, pérdida de peso, fiebre, vómito persistente, dolor que despierta en la noche, diarrea prolongada o crecimiento lento. Cuando aparecen estos datos, conviene consultar sin demoras.',
    'El gastroenterólogo infantil revisa la historia clínica, la alimentación, la frecuencia de las deposiciones, la presencia de náuseas o distensión y los estudios previos. Según el caso, puede orientar exámenes adicionales o iniciar cambios dietarios y tratamiento.',
    'Consultar a tiempo ayuda a diferenciar un dolor funcional de un problema que requiere estudio específico. Si el dolor abdominal se repite o genera preocupación en la familia, una valoración médica puede aclarar el camino a seguir.'
  ) `
  -RelatedTitles @('Estreñimiento infantil: cuándo consultar','Reflujo en bebés y niños') `
  -RelatedLinks @('estrenimiento-infantil-cuando-consultar.html','reflujo-gastroesofagico-en-bebes-y-ninos.html') `
  -RelatedAlts @('Estreñimiento infantil','Reflujo gastroesofágico en bebés y niños') `
  -ImageUrl 'https://digitalescolombia.com/assets/images/blog/grid/1.jpg'

New-Post -SourceFile 'pubertad-precoz-en-ninos.html' `
  -TargetFile 'estrenimiento-infantil-cuando-consultar.html' `
  -Canonical 'https://digitalescolombia.com/estrenimiento-infantil-cuando-consultar' `
  -Title 'Estreñimiento infantil: cuándo consultar | Gastroenterólogo infantil' `
  -MetaDescription 'El estreñimiento infantil puede requerir valoración médica cuando es persistente, doloroso o afecta la calidad de vida del niño. Conoce señales de alerta.' `
  -Headline 'Estreñimiento infantil: cuándo consultar' `
  -ImageAlt 'Estreñimiento infantil' `
  -Category 'Estreñimiento' `
  -MetaAuthor 'Gastroenterología pediátrica' `
  -Paragraphs @(
    'El estreñimiento infantil es frecuente y puede presentarse con evacuaciones escasas, heces duras, dolor al evacuar o episodios de retención. Aunque muchas veces mejora con cambios en hábitos, no debe normalizarse cuando se vuelve persistente.',
    'Entre las causas más comunes están la retención voluntaria por miedo al dolor, una ingesta baja de fibra o líquidos, cambios en la rutina, antecedentes de estreñimiento y algunos trastornos digestivos o alimentarios.',
    'Las señales de alerta incluyen dolor intenso, sangrado al evacuar, distensión abdominal, pérdida de apetito, náuseas, escapes de materia fecal o un patrón de estreñimiento que reaparece una y otra vez.',
    'Revisar los hábitos intestinales es parte importante de la valoración. Saber cada cuánto evacúa el niño, cómo son las heces, si evita ir al baño o si necesita mucho esfuerzo ayuda a orientar el manejo.',
    'Cuando existe dolor al evacuar, el niño puede comenzar a retener heces, lo que empeora el problema. Por eso es importante intervenir antes de que se establezca un círculo de dolor, miedo y más estreñimiento.',
    'El especialista evalúa alimentación, crecimiento, antecedentes, examen físico y evolución del síntoma. El tratamiento puede incluir educación familiar, ajustes dietarios, cambios de hábito, medicamentos y seguimiento para prevenir recaídas.'
  ) `
  -RelatedTitles @('Dolor abdominal recurrente en niños','Reflujo en bebés y niños') `
  -RelatedLinks @('dolor-abdominal-recurrente-ninos.html','reflujo-gastroesofagico-en-bebes-y-ninos.html') `
  -RelatedAlts @('Dolor abdominal recurrente en niños','Reflujo gastroesofágico en bebés y niños') `
  -ImageUrl 'https://digitalescolombia.com/assets/images/blog/grid/2.jpg'

New-Post -SourceFile 'diabetes-infantil-senales-alerta.html' `
  -TargetFile 'reflujo-gastroesofagico-en-bebes-y-ninos.html' `
  -Canonical 'https://digitalescolombia.com/reflujo-gastroesofagico-en-bebes-y-ninos' `
  -Title 'Reflujo en bebés y niños | Cuándo consultar' `
  -MetaDescription 'Información para padres sobre reflujo gastroesofágico en bebés y niños, síntomas frecuentes y cuándo consultar con gastroenterología infantil.' `
  -Headline 'Reflujo en bebés y niños' `
  -ImageAlt 'Reflujo gastroesofágico en bebés y niños' `
  -Category 'Reflujo' `
  -MetaAuthor 'Gastroenterología pediátrica' `
  -Paragraphs @(
    'El reflujo gastroesofágico ocurre cuando el contenido del estómago regresa hacia el esófago. En bebés pequeños puede ser un hallazgo esperado, pero en otros momentos necesita valoración si genera malestar o afecta la alimentación y el crecimiento.',
    'Muchos lactantes presentan regurgitación sin que esto implique enfermedad. Lo importante es revisar la frecuencia, la intensidad y si el bebé se mantiene activo, se alimenta bien y gana peso de manera adecuada.',
    'El reflujo se vuelve preocupante cuando se asocia con rechazo alimentario, vómito frecuente, irritabilidad persistente, tos, despertares continuos, dolor al comer o bajo aumento de peso.',
    'Cuando el niño rechaza la alimentación o parece incómodo después de comer, puede ser necesario estudiar si el reflujo está influyendo en su bienestar digestivo. No todos los casos requieren medicación, pero sí una revisión clínica cuidadosa.',
    'Los vómitos frecuentes, la mala ganancia de peso o los síntomas persistentes más allá de lo esperado ameritan una evaluación médica. El gastroenterólogo infantil puede revisar antecedentes, alimentación, evolución y estudios previos.',
    'Una valoración oportuna ayuda a distinguir el reflujo esperado de los cuadros que requieren manejo específico. Con orientación profesional, la familia puede entender qué signos vigilar y cómo acompañar mejor al niño.'
  ) `
  -RelatedTitles @('Dolor abdominal recurrente en niños','Estreñimiento infantil: cuándo consultar') `
  -RelatedLinks @('dolor-abdominal-recurrente-ninos.html','estrenimiento-infantil-cuando-consultar.html') `
  -RelatedAlts @('Dolor abdominal recurrente en niños','Estreñimiento infantil') `
  -ImageUrl 'https://digitalescolombia.com/assets/images/blog/grid/3.jpg'
