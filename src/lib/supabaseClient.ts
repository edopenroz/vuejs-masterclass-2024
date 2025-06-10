import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://srlsandbtqgaorbyvbkc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybHNhbmRidHFnYW9yYnl2YmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzQxOTUsImV4cCI6MjA2NTE1MDE5NX0.ifpMHC4Sc66bCdIGgeBF6nutJWYdudSB2SDFhAzqyfw',
)
