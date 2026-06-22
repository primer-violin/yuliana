-- Script SQL actualizado para clases presenciales de violín y música con Yuliana Denis
-- Pega este código en el "SQL Editor" de tu panel de Supabase para configurar la base de datos.

CREATE TABLE IF NOT EXISTS inscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  representante_nombre TEXT NOT NULL,
  alumno_nombre TEXT NOT NULL,
  alumno_edad INT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  programa TEXT NOT NULL,
  mensaje TEXT,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar seguridad de nivel de fila (RLS)
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir inserciones públicas (anon)
CREATE POLICY "Permitir inscripciones públicas" ON inscriptions
  FOR INSERT WITH CHECK (true);

-- Crear política para que el administrador pueda leer los datos
CREATE POLICY "Permitir lectura para usuarios autenticados" ON inscriptions
  FOR SELECT TO authenticated USING (true);
