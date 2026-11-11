
import { SITE_CONFIG } from '@/constants/site';

const SITE_URL = SITE_CONFIG.url.replace(/\/$/, '');

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#maira-oliveira`,

      name: 'Maíra Oliveira',
      jobTitle: 'Fisioterapeuta',

      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'CREFITO-11',
        value: '421293-F',
      },

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
      '@id': `${SITE_URL}/#fisioterapia-domiciliar`,

      name: 'Atendimento fisioterapêutico domiciliar',

      serviceType: 'Fisioterapia domiciliar',

      description:
        'Atendimento fisioterapêutico domiciliar com cuidado individualizado, utilizando diferentes recursos terapêuticos para promover saúde, recuperação funcional e qualidade de vida.',

      provider: {
        '@id': `${SITE_URL}/#maira-oliveira`,
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
