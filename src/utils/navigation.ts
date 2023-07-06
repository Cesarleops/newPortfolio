// const checkIsNavigationSupported = () => {
//     return Boolean(document.startViewTransition)
//   }
  
//   const fetchPage = async (url:string) => {
//     // vamos a cargar la página de destino
//     // utilizando un fetch para obtener el HTML
//     console.log(url)
//     const response = await fetch(url) // /clean-code
//     const text = await response.text()
//     // quedarnos sólo con el contenido del html dentro de la etiqueta body
//     // usamos un regex para extraerlo
//     const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)

//     return data
//   }
  
//   export const startViewTransition = () => {
//     if (!checkIsNavigationSupported()) return
  
//     window.navigation.addEventListener('navigate', (event) => {
//       const toUrl = new URL(event.destination.url)
//         console.log(toUrl)
//       // es una página externa? si es así, lo ignoramos
//       if (location.origin !== toUrl.origin) return
  
//       // si es una navegación en el mismo dominio (origen)
//       event.intercept({
//         async handler () {
//           const data = await fetchPage(toUrl.pathname)
  
//           // utilizar la api de View Transition API
//           document.startViewTransition(() => {
//             // el scroll hacia arriba del todo
//             document.body.innerHTML = data
//             document.documentElement.scrollTop = 0
//           })
//         }
//       })
//     })
//   }