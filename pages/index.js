function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <script>
    console.log('freshDesk')
    window.fwSettings={
    'widget_id':67000003397
    };
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
  </script>
  <script type='text/javascript' src='https://widget.freshworks.com/widgets/67000003397.js' async defer></script>
  <script type='text/javascript'>
    // FreshworksWidget('show', 'launcher');
    FreshworksWidget('open');

  </script>
  </div>
  )
}

export default HomePage
