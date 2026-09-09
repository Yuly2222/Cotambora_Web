import { list } from "@vercel/blob";

export type EventImage = {
  url: string;
  pathname: string;
};

const EVENTOS_PREFIX = "eventos/";
const IMAGE_EXTENSION = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Fotos de eventos subidas a Vercel Blob (carpeta `eventos/` del store
 * "cotambora-web-blob", variables EVENTOSBLOB_*).
 *
 * Se consultan en cada request (no en build) para que agregar o quitar
 * fotos desde el dashboard de Vercel (Storage > el Blob store del
 * proyecto) se refleje en el sitio sin necesidad de un nuevo deploy.
 * Si el store no está configurado (falta el token) o aún no tiene fotos,
 * devuelve un arreglo vacío para que el llamador use su contenido de
 * repuesto.
 */
export async function getEventImages(): Promise<EventImage[]> {
  const token = process.env.EVENTOSBLOB_READ_WRITE_TOKEN;
  if (!token) return [];

  try {
    const { blobs } = await list({ prefix: EVENTOS_PREFIX, token });
    return blobs
      .filter((blob) => IMAGE_EXTENSION.test(blob.pathname))
      .sort((a, b) => a.pathname.localeCompare(b.pathname))
      .map((blob) => ({ url: blob.url, pathname: blob.pathname }));
  } catch (error) {
    console.error("[event-images] No se pudieron listar las fotos de eventos:", error);
    return [];
  }
}
