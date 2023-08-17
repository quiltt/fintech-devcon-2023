import 'dotenv/config'

import { CodegenConfig } from '@graphql-codegen/cli'

const QUILTT_API_KEY = process.env.QUILTT_API_KEY

const config: CodegenConfig = {
  schema: [
    {
      'https://api.quiltt.io/v1/graphql': {
        // @ts-ignore
        headers: {
          Authorization: `Bearer ${QUILTT_API_KEY}`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
}

export default config
