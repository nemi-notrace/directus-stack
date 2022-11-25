import dotenv from 'dotenv'
import { Directus } from '@directus/sdk'

dotenv.config()

const directus = new Directus(process.env.DIRECTUS_URL || '')

export async function getDirectusClient() {
  //if (directus.auth.token) return directus;
  if (process.env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN)
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

  return `${process.env.DIRECTUS_URL || ''}/assets/${id}`
}
