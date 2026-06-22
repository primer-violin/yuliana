-- Script SQL para configurar las tablas en el panel de Supabase
-- Copia y pega este código en la sección "SQL Editor" de tu proyecto de Supabase.

-- 1. Tabla para suscriptores al "Kit de Inicio"
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla para mensajes de contacto y asesorías
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  nivel_experiencia TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Habilitar la seguridad a nivel de fila (Row Level Security - RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 4. Crear políticas para permitir inserciones públicas (anon) en ambas tablas
CREATE POLICY "Permitir inserciones públicas" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Permitir inserciones públicas" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- 5. Opcional: Permitir lectura solo para administradores autenticados (opcional si lo gestionas desde el panel de Supabase)
CREATE POLICY "Permitir lectura para usuarios autenticados" ON leads
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Permitir lectura para usuarios autenticados" ON contact_messages
  FOR SELECT TO authenticated USING (true);
