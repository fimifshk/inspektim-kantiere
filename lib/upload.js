import { createClient } from './supabase'

export const uploadPhoto = async (file) => {
  const supabase = createClient()
  
  // Krijojmë një emër unik për skedarin
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}-${Date.now()}.${fileExt}`
  const filePath = `${fileName}`

  const { data, error } = await supabase.storage
    .from('inspeksionet-photos')
    .upload(filePath, file)

  if (error) {
    throw error
  }

  // Marrim URL-në publike të fotos
  const { data: { publicUrl } } = supabase.storage
    .from('inspeksionet-photos')
    .getPublicUrl(filePath)

  return publicUrl
import { createClient } from './supabase'

export const uploadPhoto = async (file) => {
  const supabase = createClient()
  
  // Krijojmë një emër unik për skedarin
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}-${Date.now()}.${fileExt}`
  const filePath = `${fileName}`

  const { data, error } = await supabase.storage
    .from('inspeksionet-photos')
    .upload(filePath, file)

  if (error) {
    throw error
  }

  // Marrim URL-në publike të fotos
  const { data: { publicUrl } } = supabase.storage
    .from('inspeksionet-photos')
    .getPublicUrl(filePath)

  return publicUrl
}