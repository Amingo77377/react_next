import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

function HomePage() {
  const router = useRouter()
  console.log(router?.query?.lang)
  useEffect(() => {
    window.fwSettings={
      'widget_id': 67000003397,
      'locale': router?.query?.lang || 'zh-TW'
    }
    const script = document.createElement('script');
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
    script.src = "https://widget.freshworks.com/widgets/67000003397.js";
    script.type = 'text/javascript'
    script.defer = true;
    script.onload = () => {
      FreshworksWidget('open')
      FreshworksWidget("setLabels", {
        'zh-TW': {
          banner: "rezio 支援中心",
          launcher: "支援",
          contact_form: {
            title: "聯絡我們",
            submit: "送出",
            confirmation: "您的讯息已成功送出！"
          },
        },
        'zh-CN': {
          banner: "rezio 支持中心",
          launcher: "支持",
          contact_form: {
            title: "联络我们",
            submit: "送出",
            confirmation: "您的讯息已成功送出！"
          },
        },
        'ja-JP': {
          banner: "rezio 支援中心",
          launcher: "支援",
          contact_form: {
            title: "聯絡我們",
            submit: "送出",
            confirmation: "您的讯息已成功送出！"
          },
        },
        'ko': {
          banner: "rezio 支援中心",
          launcher: "支援",
          contact_form: {
            title: "聯絡我們",
            submit: "送出",
            confirmation: "您的讯息已成功送出！"
          },
        }
      });
      const timer = setTimeout(() => {
        document.getElementById('freshworks-container')?.style.zIndex = 2147483640
        
      }, 500)
      window.ReactNativeWebView?.postMessage('done')
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
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
