import React, {useEffect} from 'react'

function HomePage() {
  useEffect(() => {
  const script = document.createElement('script');
     window.fwSettings={
      'widget_id':67000003397
      };
      !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
    script.src = "https://widget.freshworks.com/widgets/67000003397.js";
    script.type = 'text/javascript'
    script.defer = true;
    script.onload = () => {
      FreshworksWidget('open')
      setTimeout(() => {
        document.getElementById('freshworks-container')?.style.zIndex = 2147483640
      }, 500)
      window.ReactNativeWebView?.postMessage('done')
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div style={{position: 'relative'}}>
     <div 
      onClick={(e) => {
        e.stopPropagation()
        window.ReactNativeWebView?.postMessage('close')
      }}
      style={{width: '32px', height: '32px', position: 'absolute', top: '16px', right: '16px', zIndex: 2147483647, backgroundColor: 'red'}}></div>
    </div>
  )
}

export default HomePage
