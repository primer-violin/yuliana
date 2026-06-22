import { createClient } from '@supabase/supabase-js';

// Environment variables are loaded by Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Checking if keys are present
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase credentials missing! Running in Demo/Mock mode. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

// Export original client or a mocked object for demo purposes
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: (table: string) => ({
        insert: async (data: any) => {
          console.log(`[Mock Supabase] Inserting into table "${table}":`, data);
          // Simulate network delay
          await new Promise((resolve) => setTimeout(resolve, 800));
          return { data, error: null };
        },
      }),
    } as any;

export { isSupabaseConfigured };
