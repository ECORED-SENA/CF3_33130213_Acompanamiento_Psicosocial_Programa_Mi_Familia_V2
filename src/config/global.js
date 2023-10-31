export default {
  global: {
    componenteFormativo: 'Enfoque diferencial en discapacidad',
    descripcionCurso:
      'El programa Mi Familia tiene como uno de sus propósitos la implementación, atención y acompañamiento psicosocial a las familias con niños, niñas y adolescentes u otros integrantes con discapacidad desde un enfoque inclusivo, diferencial y comunitario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El carácter inclusivo del programa Mi familia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Aspectos diferenciales del acompañamiento psicosocial en familias con personas en situación de discapacidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'La eliminación de barreras y los ajustes razonables para la atención inclusiva de las PcD y sus familias',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Elementos para el abordaje de la discapacidad desde el rol del profesional de acompañamiento familiar',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Abordaje de la discapacidad en la caracterización y el diagnóstico',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El carácter inclusivo del programa Mi familia',
      referencia:
        'ICBF. (2017). Guía orientadora para el acompañamiento a las familias de niños y niñas con discapacidad. Orientaciones técnicas para el talento humano. ICBF. ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/g1.mo12.pp_guia_orientadora_de_acompanamiento_a_familias_con_ninos_y_ninas_con_discapacidad_v1.pdf',
    },
    {
      tema:
        'Aspectos diferenciales del acompañamiento psicosocial en familias con personas en situación de discapacidad',
      referencia: 'ICBF. (2017). Modelo  enfoque diferencial . ICBF. ',
      tipo: 'Documento PDF',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/md1.de_modelo_de_enfoque_diferencial_de_derechos_medd_v1.pdf',
    },
    {
      tema: 'Ficha sociofamiliar',
      referencia:
        'ICBF. (2019). Guía para el registro de las variables de discapacidad en los sistemas de información del ICBF. ICBF. ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g1.md1_.de_guia_para_el_registro_de_variables_de_discapacidad_en_los_sistemas_de_informacion_del_icbf_v2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajustes razonables',
      significado:
        'Hace referencia a las modificaciones y adaptaciones que no impongan una carga desproporcionada o indebida de todo aquello que impide o limite la participación de las personas en situación de discapacidad en las actividades familiares, sociales y colectivas de la sociedad que habitan (UNICEF & ICBF, 2020).',
    },
    {
      termino: 'Barreras',
      significado:
        'Características de los espacios, las instituciones y de las personas que dificultan o impiden la participación de las PcD.',
    },
    {
      termino: 'NNAcD',
      significado:
        'Abreviatura de niños, niñas y adolescentes en situación de discapacidad.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de Profesional de acompañamiento familiar.',
    },
    {
      termino: 'PcD',
      significado: 'Abreviatura de persona en situación de discapacidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángulo, J., Carrero, A., De Oro, K., Pacheco, M.  & Villamizar, D.  (2021). Caracterización socioeconómica de las familias beneficiarias del programa Mi familia. Cruce base maestra - DNP. ICBF.',
      link: '',
    },
    {
      referencia:
        'DNP. (2013). Conpes Social 166. Política pública nacional de discapacidad e inclusión social. DNP.',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Social/166.pdf',
    },
    {
      referencia: 'ICBF. (2017). Modelo enfoque diferencial. ICBF.',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/md1.de_modelo_de_enfoque_diferencial_de_derechos_medd_v1.pdf',
    },
    {
      referencia:
        'ICBF. (2019). Guía para el registro de las variables de discapacidad en los sistemas de información del ICBF. ICBF.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2020).  Proceso promoción y prevención. Ficha de caracterización sociofamiliar. ICBF.',
      link:
        'https://www.icbf.gov.co/system/files/procesos/f13.mo18.pp_formato_ficha_caracterizacion_socio_familiar_v1_0.pdf',
    },
    {
      referencia:
        'ICBF. (2020). Lineamiento técnico modalidad mi familia. ICBF.',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      referencia: 'ICBF. (2020). Manual operativo modalidad mi familia. ICBF.',
      link:
        'https://www.icbf.gov.co/system/files/procesos/mo18.pp_manual_operativo_modalidad_mi_familia_v4.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2014). Convención sobre los derechos de las personas con discapacidad. Guía de formación: serie de capacitación profesional Nº 19. Naciones Unidas.',
      link:
        'https://www.ohchr.org/Documents/Publications/CRPD_TrainingGuide_PTS19_sp.pdf',
    },
    {
      referencia:
        'Resolución 583 de 2018. [Ministerio de Salud y Protección Social]. Por la cual se implementa la certificación de discapacidad y el Registro de localización y caracterización de personas con discapacidad. Febrero 26 de 2018.',
      link: '',
    },
    {
      referencia:
        'Unicef & ICBF. (2020). Acompañamiento a las familias de niños y niñas con discapacidad. Orientaciones técnicas para el talento humano. Unicef & ICBF.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
