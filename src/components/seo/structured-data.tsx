
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'Person',
      '@id': '#maira-oliveira',

      name: 'Maíra Oliveira',
      jobTitle: 'Fisioterapeuta',

      identifier: 'CREFITO-11: 421293-F',

      sameAs: [
        'https://www.instagram.com/fisiomaira/',
      ],

      knowsAbout: [
        'Terapia Manual',
        'Ventosaterapia',
        'Liberação Miofascial',
        'Eletroterapia',
        'Ortopedia',
        'Pré e Pós-operatório',
        'Geriatria',
        'ATM e DTM',
        'Hidroterapia',
      ],
    },

    {
      '@type': 'Service',
      '@id': '#fisioterapia-domiciliar',

      name: 'Atendimento fisioterapêutico domiciliar',

      serviceType: 'Fisioterapia domiciliar',

      description:
        'Atendimento fisioterapêutico domiciliar com cuidado individualizado, utilizando diferentes recursos terapêuticos para promover saúde, recuperação funcional e qualidade de vida.',

      provider: {
        '@id': '#maira-oliveira',
      },

      areaServed: {
        '@type': 'City',
        name: 'Brasília',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Distrito Federal',
        },
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(STRUCTURED_DATA).replace(
          /</g,
          '\\u003c',
        ),
      }}
    />
  );
}
