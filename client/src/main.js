window.init = function init () {

    var date = new Date(),
        now = date.getTime(),
        bar = document.querySelector(".bar"),
        pm = false


    pm = document.querySelector("#pm").value == 'pm',
    date.setHours( (pm ? 12 : 0) + parseInt(document.querySelector("#hour").value))
    date.setMinutes(parseInt(document.querySelector("#minute").value))

    function tick (b, s, e) {

        var now = Date.now(),
            duration = e - s,
            progress = (now - s),
            percent = (100 * (progress / duration).toFixed(16))

        document.title = `${Math.round(percent)}% Done`
        b.setAttribute("style", "width:" + percent + "%;")

        setTimeout( () => {

            tick( b, s, e )

        }, 1000)
    }
    tick(bar, Date.now(), date.getTime())
    document.body.removeChild(document.forms[0])

}