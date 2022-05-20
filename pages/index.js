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

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
  )
}

export default HomePage
