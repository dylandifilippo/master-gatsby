import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza in Fleurus`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin I am adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'pbhcs4hm',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
