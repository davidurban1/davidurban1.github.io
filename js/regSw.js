/* invoca a regSw para instalar la
 * aplicación en el caché del
 * navegador. */
regSw();
/** Registra un service worker
 * para instalar la aplicación en
 * el caché del navegador. */
async function regSw() {
  try {
    /* Registra el service worker,
     * que debe estar en la
     * carpeta principal. */
    const registro =
      await navigator.
        serviceWorker.
        register("/sw.js");
    console.log("sw registrado correctamente.");
    console.log(registro:d);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
}
