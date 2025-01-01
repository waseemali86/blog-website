import { type SchemaTypeDefinition } from 'sanity'
import { Blog } from '../schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog],
}
