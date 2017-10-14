import { 
    applyStyle,
    styles
} from './style.js'

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
        this.hideOnComplete = config.hideOnComplete == true ? true : false

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

        if ( percent >= 100 ) {

            if ( this.hideOnComplete ) 

                this.elem.style.display="none"
            
        } else {

            setTimeout(() => { this.tick() }, 1000)

        }
        
    }

}

window.ProgressBar = ProgressBar

module.exports = ProgressBar