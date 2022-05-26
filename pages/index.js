import React, {useEffect} from 'react'

function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
    script.src = "https://widget.freshworks.com/widgets/67000003397.js";
    script.type = 'text/javascript'
    script.defer = true;
    script.onload = () => {
      FreshworksWidget('open')
      const timer = setTimeout(() => {
        document.getElementById('freshworks-container')?.style.zIndex = 2147483640
        
      }, 500)
      window.ReactNativeWebView?.postMessage('done')
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [window?.fwSettings]);
  
//   useEffect(() => {
//     const messageHandler = (message) => {
//       window.ReactNativeWebView?.postMessage(
//       window.ReactNativeWebView?.postMessage(JSON.stringify(message?.data))
//     }
//     window.addEventListener('message', messageHandler)
//     return () => {
//       window.removeEventListener('message', messageHandler)
//     }
//   }, [])
  
  return (
    <div style={{position: 'relative'}}>
     <div 
      onClick={(e) => {
        e.stopPropagation()
        window.ReactNativeWebView?.postMessage('close')
      }}
      style={{width: '48px', height: '48px', position: 'absolute', top: '8px', right: '8px', zIndex: 2147483647, backgroundColor: 'red'}}></div>
    </div>
  )
}

export default HomePage
