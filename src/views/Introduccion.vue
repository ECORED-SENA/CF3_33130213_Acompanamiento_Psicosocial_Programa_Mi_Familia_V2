<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-intro.mn.p-5
      p.mb-5(data-aos='fade-right') En este componente formativo se recorrerá el tercer escenario del curso para #[b profundizar sobre el enfoque diferencial e inclusivo del acompañamiento psicosocial del programa Mi familia]. En el siguiente video se explica de manera genérica las temáticas a profundizar.
      figure.mb-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NNUiYFjg9hg?si=si0bQJKa9PL8O_F-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Enfoque diferencial en discapacidad
      div(style="background-color: #fff0c4 ").p-4
        .row.justify-content-center.align-items-center
          .col-lg-1.col-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-lg-11
            p.mb-0 #[b Objetivo:] identificar los elementos inclusivos y diferenciales del programa Mi familia para la atención a familias con niños, niñas y adolescentes u otros integrantes en situación de discapacidad.
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url('../assets/curso/temas/intro/bg-intro.svg')
  background-position: start
  background-repeat: no-repeat
  background-size: cover
  margin-top: -3rem !important
.mn
  margin: 0 -3rem
</style>
