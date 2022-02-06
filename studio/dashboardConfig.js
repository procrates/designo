export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'designo-studio',
                  apiId: 'ba7d1489-7bec-4f59-8c6c-993741bd178d'
                },
                {
                  buildHookId: '61ffcab037ee9f90887e936d',
                  title: 'Events Website',
                  name: 'designo-web-7biwsq8c',
                  apiId: '17be3675-e633-4ba3-95a0-a1a2400a0adb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/procrates/designo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://designo-web-7biwsq8c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
