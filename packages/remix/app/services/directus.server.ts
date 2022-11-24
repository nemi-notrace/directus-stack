import { Directus } from '@directus/sdk'
import { envSchema } from '~/env.server'

let env = envSchema.parse(process.env)

const directus = new Directus(env.DIRECTUS_URL)

export async function getDirectusClient() {
  //if (directus.auth.token) return directus;
  if (env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(env.DIRECTUS_STATIC_TOKEN)
  }
  return directus
}

export function getAssetURL(image: any) {
  if (!image) return null

  let id = image
  if (typeof image === 'object') {
    id = image.id
  }
  if (!id) return null

  return `${env.DIRECTUS_URL}/assets/${id}`
}
