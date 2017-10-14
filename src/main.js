let styles = {       
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

let applyStyle = ( element, style ) => {

    Object.keys(style).map(key=> {
        element.style[ key ] = style[ key ]
    })
   
}

class ProgressBar {

    constructor( config = {} ) {

        let elem = document.createElement("div"),
            container = document.querySelector( config.selector || "#progress-bar")

        if ( container ) {

            container.appendChild( elem )

        } else {

            document.body.appendChild( elem )

        }
        
        applyStyle( elem, Object.assign({}, styles.bar, config.style ? config.style : {} ) )
        this.elem = elem
        this.value = 0
        this.startTime = null
        this.endTime = null

    }

    start ( endTime ) {

        let date = new Date(),
            now = date.getTime(),
            pm = false

        if ( endTime ) {

            this.endTime = endTime
            this.startTime = Date.now()

        }

        this.tick( )

    }

    update ( progress ) {

        let percent = (100 * progress).toFixed(16)
        this.value = progress
        this.elem.style.width = percent + "%"

    }

    configure ( data ) {

        if ( data.hidden !== undefined ) {
            this.elem.style.display = data.hidden ? 'none' : 'block'
        }

    }

    tick (  ) {

        var now = Date.now(),
            duration = this.endTime - this.startTime,
            progress = (now - this.startTime),
            percent = 0

        //document.title = `${Math.round(percent)}% Done`
        if ( this.value ) {
            percent = (100 * this.value).toFixed(16)
        } else {
            percent = (100 * (progress / duration)).toFixed(16)
        }

        this.elem.style.width = percent + "%"

        setTimeout(() => {

            this.tick()

        }, 1000)
    }

}

window.ProgressBar = ProgressBar

module.exports = ProgressBar