export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e14f22dbba70e7790a3070d',
                  title: 'Sanity Studio',
                  name: 'aircrft-platform-001-portfolio-sanity-gatsby-studio',
                  apiId: '760a21b1-5875-4af9-9610-8082ae1a46df'
                },
                {
                  buildHookId: '5e14f22d78b994f4e922d458',
                  title: 'Portfolio Website',
                  name: 'aircrft-platform-001-portfolio-sanity-gatsby',
                  apiId: '7ed99502-88ae-4871-94b5-94ad554e8ca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aircrftplatform001/aircrft-platform-001-portfolio-sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://aircrft-platform-001-portfolio-sanity-gatsby.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
