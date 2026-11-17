// Gives each technology chip a colour by what kind of thing it is.
// Unknown names fall back to gray, so a new project never breaks the page.
const tones: Record<string, 'blue' | 'violet' | 'green' | 'orange' | 'pink'> = {
  python: 'blue',
  javascript: 'blue',
  fastapi: 'green',
  flask: 'green',
  sqlalchemy: 'green',
  jwt: 'green',
  postgresql: 'violet',
  postgis: 'violet',
  mongodb: 'violet',
  sqlite: 'violet',
  qdrant: 'violet',
  pgvector: 'violet',
  h3: 'violet',
  react: 'orange',
  leaflet: 'orange',
  docker: 'orange',
  git: 'orange',
  gemini: 'pink',
  groq: 'pink',
  openai: 'pink',
  'hugging face': 'pink',
  rag: 'pink',
};

export function tone(name: string): 'blue' | 'violet' | 'green' | 'orange' | 'pink' | 'gray' {
  return tones[name.toLowerCase()] ?? 'gray';
}
