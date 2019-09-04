export default {
  name: 'Microsoft',
  address: 'Redmond, WA, USA',
  avatar: 'https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rerum velit ut similique saepe consequuntur possimus quas vel fugit optio?',
  activities: [
    {
      id: 1,
      icon: 'video-platform',
      date: '28/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Cloud Orchestration',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 2,
      icon: 'content-delivery',
      date: '26/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Express Scripts',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 3,
      icon: 'waf-d-dos-security',
      date: '24/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Kaiser Permanente',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 4,
      icon: 'traffic-management',
      date: '22/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Kaiser Permanente',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 5,
      icon: 'dns',
      date: '21/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Express Scripts',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 6,
      icon: 'saas',
      date: '20/08/2019',
      operation: {
        type: 'replace',
        replace: {
          title: 'Molina Healthcare',
          url: '#'
        },
        property: {
          amount: 1,
          url: '#'
        }
      }
    },
    {
      id: 7,
      icon: 'content-delivery',
      date: '20/08/2019',
      operation: {
        type: 'launch',
        service: {
          title: 'M-Cloud'
        }
      }
    }
  ],
  spendHistory: [
    {
      id: 1,
      name: 'Google Cloud Platform',
      logo: 'gcloud',
      url: '#',
      description: 'Microsoft spend on product $500,000'
    },
    {
      id: 2,
      name: 'CenturyLink CDN',
      logo: 'century',
      url: '#',
      description: 'Microsoft spend on product $300,000'
    }
  ],
  spendHistoryChart: [25000, 35000, 30000, 55000, 40000, 30000, 85000]
}