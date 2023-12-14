<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aspectos diferenciales del acompañamiento psicosocial en familias con personas con discapacidad
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .p-3(style="background-color: #fee8e8").h-100.d-flex.align-items-center
          p.mb-0 El programa Mi Familia atiende a familias con niños, niñas o adolescentes con discapacidad desde una perspectiva inclusiva, lo cual permite a las PcD y a sus familias gozar de sus derechos y hacer presencia en los entornos y espacios en igualdad de condiciones con el resto de la población. 
      .col-lg-4.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema2/1.jpg', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .p-3(style="background-color: #e8e8e8").h-100.d-flex.align-items-center
          p.mb-0 Asimismo, la perspectiva inclusiva implica la incorporación de ajustes o adecuaciones al diseño del programa y a su modelo de atención que tengan en cuenta los intereses y necesidades particulares de estas familias, con el propósito de contribuir al cierre de las brechas que enfrentan. 
    p.mb-5(data-aos='fade-right') Estos ajustes en el modelo de atención, los cuales se detallarán en apartados posteriores, se soportan en dos conceptos propuestos por la Comisión y que también han sido adoptados en el marco normativo y de política de nuestro país, #[span.color-r la eliminación de barreras y los ajustes razonables], cuyos principales elementos se presentan a continuación. 
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 La eliminación de barreras y los ajustes razonables para la atención inclusiva de las PcD y sus familias
    .contenedor-modificado
      .cajon-b.color-acento-contenido.abajo-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-11.mb-lg-0.mb-3
            p.mb-0 El reconocimiento de las personas con discapacidad como sujetos de derechos, independiente de sus condiciones biológicas representa un gran avance, sin embargo, para avanzar en equidad y en la superación de las brechas que enfrenta esta población es preciso reconocer que las personas con discapacidad y sus familias han sido segregados y discriminados, limitando las posibilidades con las que cuentan para lograr su pleno desarrollo. 
          .col-lg-1.col-2: img(src='@/assets/curso/temas/tema2/2.svg', alt='')
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es necesario recordar que la Convención reconoce que la discapacidad se hace evidente en la interacción de las personas con el entorno. En este sentido, hay entornos y espacios más o menos incapacitantes en la medida que facilitan o entorpecen la participación de los individuos. A esas características de los espacios, las instituciones y de las personas que dificultan o impiden la participación de las PcD se les conoce como #[b barreras.] 
    p.mb-5(data-aos='fade-right') Serrano (2013) (citado en Unicef & ICBF, 2020) precisa que las barreras son factores que obstaculizan la participación y el desarrollo de los individuos. Las barreras, presentes en el entorno físico, en la tecnología y en las actitudes de las personas frente a la discapacidad, afectan el funcionamiento de los órganos y estructuras corporales e impiden la realización de actividades cotidianas de las PcD. #[span.color-r El documento referenciado presenta tres (3) tipos de barreras:]
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
      .tarjeta.color-primario--borde.p-3(x="8%" y="55.7%" numero="+")
        p Obstáculos materiales, tangibles o construidos que impiden o dificultan el acceso y el uso de espacios, objetos y servicios de carácter público y privado, en condiciones de igualdad, por parte de las personas con discapacidad.
      .tarjeta.color-primario--borde.p-3(x="33%" y="37.8%" numero="+")
        p Obstáculos que impiden o dificultan el acceso a la información, a la consulta, al conocimiento y en general, el desarrollo en condiciones de igualdad del proceso comunicativo de las personas con discapacidad a través de cualquier medio o modo de comunicación, incluidas las dificultades en la interacción comunicativa de las personas.
      .tarjeta.color-primario--borde.p-3(x="77.5%" y="32.4%" numero="+")
        p Se encuentran en las personas y en las instituciones y se manifiestan a través de conductas, palabras, frases, sentimientos, preconcepciones, estigmas, que impiden u obstaculizan el acceso en condiciones de igualdad de las personas con discapacidad a los espacios y servicios sociales.
    p  Las barreras a la participación de las personas con discapacidad pueden estar presentes en todos los entornos donde transcurren sus vidas. Desde la perspectiva ecosistémica, presentada en el componente formativo «Acompañamiento psicosocial familiar», las barreras pueden estar presentes en todos los sistemas donde las PcD participan directamente o en aquellos en donde no participan o no hacen presencia, pero donde se toman decisiones que tienen efectos en sus vidas. 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-lg-0.mb-3
        .p-4(style="background-color:  #ddfdee").h-100
          .row.justify-content-center
            .col-lg-3.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/5.svg', alt='')
            .col-lg-9 
              p.mb-0 En este sentido, las barreras a la participación se pueden encontrar en la familia, en la casa o domicilio que habita la PcD, en el barrio, la comunidad, el espacio público, en las políticas, en las prácticas institucionales, etc. 
      .col-lg-8.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/6.jpg', alt='')
    p.mb-5(data-aos='fade-right') El proceso de eliminar o reducir las barreras para avanzar en la inclusión de las PcD se ha denominado #[span.color-r ‘ajustes’]. La Convención sobre los Derechos de las PcD les ha puesto la característica de ‘razonables’ para considerar que estos ajustes no impliquen una carga desmedida para la comunidad o la familia. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-img__1.p-3
          .contenido
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p Así, los #[b ‘ajustes razonables’] hacen referencia a las modificaciones y adaptaciones, que no impongan una carga desproporcionada o indebida, de todo aquello que impide o limite la participación de las personas con discapacidad en las actividades familiares, sociales y colectivas de la sociedad que habitan.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h6.mb-0 (Unicef & ICBF, 2020) .
            
          img.position.d-xl-block.d-none(src='@/assets/curso/temas/tema2/7.svg', alt='')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Elementos para el abordaje de la discapacidad desde el rol del profesional de acompañamiento familiar
    .contenedor-modificado
      .cajon-b.color-acento-contenido.abajo-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-11.mb-lg-0.mb-3
            p.mb-0 El componente #[span.color-r «Estructuración del acompañamiento psicosocial familiar»] presenta un apartado que contiene las orientaciones sobre el rol de Profesional de Acompañamiento Familiar las cuales aplican también para el trabajo con familias con personas con discapacidad. A esas orientaciones se suman las que se presentan a continuación, relacionadas con aspectos de especial atención cuando se participa en procesos de fortalecimiento con familias con PcD.
          .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/8.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/9.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--amarilla")
          div(titulo="Reconocimiento de derechos")
            p Incorporar una visión sobre la discapacidad que reconoce a las PcD como sujetos de derechos que pueden participar plenamente en la vida familiar, social y comunitaria, superando las miradas de la discapacidad como un error, una falla o una enfermedad, asumiéndola como parte de la diversidad humana. Es importante que el PAF tenga siempre presente que las capacidades de una persona no definen a que derechos pueden o no acceder.
          div(titulo="Contacto")
            p Referirse siempre a la persona con discapacidad por su nombre y no por su diagnóstico o con diminutivos que pueden transmitir o consolidar una visión desde la incapacidad y la dependencia. 
          div(titulo="Perspectiva integral")
            p Identificar a la PcD desde una perspectiva integral, teniendo en cuenta su contexto y su historia y no limitándose a reconocerla a partir de un diagnóstico. Esto implica promover conversaciones sobre cómo se han construido las relaciones al interior de la familia y con su entorno más cercano para motivar la transformación de prácticas y costumbres que limitan el pleno desarrollo de la PcD, teniendo cuidado de no juzgar o cuestionar las decisiones de las familias.
              br
              br
              |El reconocimiento de la PcD desde una perspectiva integral y no solo desde el diagnóstico de su discapacidad permite trascender la idea que quienes comparten un diagnóstico tienen la misma personalidad, las mismas preferencias y las mismas habilidades. Esta idea, que asume el diagnóstico como un pronóstico de lo que será o no será la vida de una persona, ha permitido que se consoliden estereotipos que niegan el papel del contexto social y cultural en el desarrollo de las personas. 
          div(titulo="Autorreferenciación")
            p En el trabajo con familias con PcD podría suceder que el PAF adopte miradas compasivas como resultado de sus propias ideas y experiencias sobre la discapacidad. El PAF debe estar atento a estas miradas con las familias con PcD puesto que pueden entorpecer el proceso de fortalecimiento y consolidación de la autonomía de la familia. Las miradas compasivas podrían estar presentes cuando el PAF se excede en mecanismos sobreprotectores, evita el establecimiento de compromisos por parte de las familias, lleva regalos o les permite saltar las normas o los acuerdos establecidos en el acompañamiento. 
              br
              br
              |Una forma de avanzar es observar su cotidianidad, sus momentos de encuentro, las manifestaciones de afecto, sus preocupaciones y la forma como viven sus conflictos, para reconocer que la realidad de las familias de niños y niñas con discapacidad es parecida a la de las demás familias de su contexto y que tienen más elementos en común de los que parecen. 
          div(titulo="Normalizar")
            p Otra mirada que puede aparecer cuando se trabaja con familias con personas con discapacidad y que parece ser la opuesta a la mirada compasiva es la mirada normalizadora. La mirada normalizadora no reconoce la necesidad de incorporar ajustes razonables soportada en un aparente sentido de igualdad que desconoce la diversidad. 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Abordaje de la discapacidad en la caracterización y el diagnóstico
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")  
        p.mb-0 El proceso de caracterización y diagnóstico del programa Mi Familia incorpora aspectos diferenciales para familias con PcD. 
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema2/10.png', alt='')     
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-img__2.p-3
          img.position.d-xl-block.d-none(src='@/assets/curso/temas/tema2/11.svg', alt='')
          .contenido.p-3
            p.mb-0 En el desarrollo de este proceso es probable que el PAF requiera realizar ajustes razonables para garantizar la participación y la expresión de las opiniones por parte de las PcD.
    .mn.bg-new.p-5.py-5 
      .row.justify-content-center.mb-5
        .col-lg-10
          .p-4(style="background-color: #ddfdee ")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
              .col-lg-11
                p.mb-0 Ahora bien, en cuanto a los instrumentos de caracterización y diagnóstico que contempla el programa Mi Familia, se encuentra la #[b ficha socio familiar.]
      p.mb-5(data-aos='fade-right') Esta ficha tiene cuatro (4) apartados, dos (2) de los cuales recogen información a nivel de individuos, el dedicado a recoger la información del jefe del grupo familiar y el dedicado a los demás integrantes. En el diligenciamiento de estos apartados y cuando se esté recogiendo información correspondiente a una PcD se debe procurar que ésta esté presente y las preguntas se le realicen directamente. El siguiente recurso presenta el apartado de caracterización de las personas con discapacidad y en qué consiste el diligenciamiento de cada campo.
      img.mb-4(src='@/assets/curso/temas/tema2/c1.png', alt='')
      LineaTiempoD.color-acento-botones.mb-5
        div(numero="1" titulo="¿El beneficiario presenta discapacidad?")
          .h5.mb-2 
          p El primer campo de este grupo de preguntas sirve como filtro inicial. La opción Sí se elige cuando el informante presenta el certificado de discapacidad emitido por una Entidad Promotora de Salud (EPS) del régimen contributivo o subsidiado, una administradora del régimen especial de excepción o una Institución Prestadora de Servicios de Salud (IPS). Asimismo, se debe elegir la opción Sí cuando, sin tener el certificado, la persona se autorreconoce con discapacidad. 
            br
            br
            |Cuando una persona se auto reconoce con discapacidad y no tiene el certificado de discapacidad, el profesional de acompañamiento familiar debe orientarlo sobre las gestiones necesarias para obtenerlo.
        div(numero="2" titulo="¿La discapacidad está certificada?")
          p El Sistema de Salud de nuestro país ha dispuesto mecanismos para certificar la discapacidad; en este sentido, la discapacidad está certificada cuando la PcD cuenta con el certificado de discapacidad emitido por una EPS del régimen contributivo y subsidiado, una administradora del régimen especial de excepción o una IPS, como se mencionó anteriormente. 
        div(numero="3" titulo="¿Tiene proceso de Interdicción?")
          p Se debe escoger la opción Sí cuando la PcD o su acompañante informan que la PcD tiene un proceso de interdicción declarada por una autoridad judicial. Se presentan listadas las once (11) categorías de discapacidad que contiene la Ficha Socio Familiar las cuales no son excluyentes, es decir, una persona puede presentar una o varias de estas categorías. Las categorías incluidas son las que dispone la Resolución 583 de 2018 más otras que aparecen en los certificados de discapacidad anteriores a la mencionada resolución y que todavía son válidos. Marque las categorías siguiendo las siguientes orientaciones, retomadas de ICBF (2019). 
        div(numero="4" titulo="Entidad que certifica la discapacidad")
          p En este caso se mencionan las opciones al informante y se espere su respuesta. Se puede orientar al informante siguiendo lo establecido en la Guía para el registro de las variables de discapacidad en los sistemas de información del ICBF (2019) en el siguiente sentido: 
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | Se debe escoger la opción EPS Resolución 583 cuando la PcD cuente con el certificado generado por una EPS en cumplimiento de lo estipulado en la Resolución 583 de 2018.
            li
              i.fas.fa-check-circle
              | Se debe escoger la opción EPS cuando la PcD cuente con un certificado emitido por una EPS del régimen contributivo o subsidiado de manera previa a la Resolución 583 de 2018.
            li
              i.fas.fa-check-circle
              | Se debe escoger la opción IPS cuando la PcD cuente con un certificado emitido por una entidad de esa naturaleza; se debe escoger la opción Medicina Legal cuando la PcD cuente con un certificado emitido por el Instituto Nacional de Medicina Legal y Ciencias Forenses INMLCF.

            li
              i.fas.fa-check-circle
              | Se debe escoger la opción Junta de Calificación de Invalidez cuando la PcD cuente con un certificado emitido por una Junta Regional o Nacional de Calificación de Invalidez, las cuales califican la pérdida de capacidad laboral, el estado de invalidez y determinan su origen, en casos de accidentes y enfermedades de origen común o profesional, entre otras.
        div(numero="5" titulo="¿Está inscrito en el registro para la localización y caracterización de personas con discapacidad?")
          p Debe escoger la opción Sí cuando la PcD cuenta con el certificado emitido por EPS en cumplimiento a lo estipulado en la Resolución 583 de 2018 o manifiesta estar inscrito en el Registro de Localización y Caracterización de Personas con Discapacidad (RLCPD). Siguiendo las orientaciones de ICBF (2019), en caso de que la PcD no esté registrada, el profesional de acompañamiento familiar debe registrar la opción No y orientar a la PcD para gestionar el RLCPD a través de la expedición del certificado de discapacidad. Una vez obtenido el certificado, deberá actualizar el RLCPD de la PcD en las herramientas de recolección de información del ICBF.
        div(numero="6" titulo="Cinco situaciones")
          p Se presentan cinco situaciones, las cuales se deben marcar en caso de que se presenten en la PcD, siguiendo las siguientes indicaciones.
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | El beneficiario requiere la ayuda de otra persona. Se debe marcar cuando la PcD requiere la ayuda de otra persona para realizar actividades básicas de la vida diaria como cuidado personal, aseo personal, control de esfínteres, comer y beber, vestirse, cambiar y mantener diversas posturas corporales, levantarse, acostarse y permanecer de pie, y desplazarse dentro del hogar. En caso de que la PcD esté necesitando un apoyo transitorio para este tipo de actividades no se debe marcar esta situación. 

            li
              i.fas.fa-check-circle
              | El beneficiario requiere ayuda técnica/Producto de apoyo. Se debe marcar cuando la PcD, su médico tratante o su acompañante, manifiesten que la persona requiere algún producto o tecnología de apoyo para el desarrollo de sus actividades básicas de la vida diaria.
            li
              i.fas.fa-check-circle
              | El beneficiario cuenta con la ayuda técnica/Producto de apoyo. Se debe marcar cuando la PcD cuenta con un producto de apoyo o ayuda técnica, cuando ésta o su acompañante informan que dispone de ayuda técnica o cuando es evidente que la persona la está usando.
            li
              i.fas.fa-check-circle
              | El beneficiario requiere terapia y/o rehabilitación. Se debe marcar cuando la PcD o su acompañante informan que un médico tratante le ordenó terapia y/o rehabilitación.
            li
              i.fas.fa-check-circle
              | El beneficiario recibe atención en terapia y/o rehabilitación. Se debe marcar cuando la PcD o su acompañante informan que recibe atención en terapia y/o rehabilitación. 
        div(numero="7" titulo="Nivel de dificultad de desempeño %")
          p El último campo referente a discapacidad incluye seis subcampos no excluyentes en donde se debe consignar un valor en porcentaje. Esta información solo se debe diligenciar si la PcD cuenta con la certificación emitida por EPS en el marco de la Resolución 583 de 2018 y tiene 6 o más años y, se debe transcribir tal como aparece en dicha certificación.


















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
