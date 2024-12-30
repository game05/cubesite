import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://urhglupooglynymtxqfc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyaGdsdXBvb2dseW55bXR4cWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1Nzc4NDAsImV4cCI6MjA1MTE1Mzg0MH0.CmL5TOXRMX0GKNrNoz2RGMAzRufkXfgzgcLHwut2MRg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
