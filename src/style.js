export let styles = {       
    bar: {
       height: '48px',
       background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 20px, rgba(0, 0, 0, 0.2) 20px, rgba(0, 0, 0, 0.2) 40px ), linear-gradient(#00ff00, #00BB00)",
       "box-shadow": "0px 0px 10px #00ff00",
       transition: "all 0.333s ease-out",
       position: "absolute",
       top: 0,
       bottom: 0,
       left: 0,
       margin: 'auto'
    }
}

export let applyStyle = ( element, style ) => {

    Object.keys(style).map(key=> {
        element.style[ key ] = style[ key ]
    })
   
}