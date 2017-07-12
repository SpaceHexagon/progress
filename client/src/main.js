window.init = function init () {

    var date = new Date(),
        now = date.getTime(),
        bar = document.querySelector(".bar")

    date.setHours(12 + parseInt(document.querySelector("#hour").value))
    date.setMinutes(parseInt(document.querySelector("#minute").value))

    function tick (b, s, e) {

        var now = Date.now(),
            duration = e - s,
            progress = (now - s),
            percent = (100 * (progress / duration).toFixed(16))

        document.title = "Progress " + Math.round(percent) + "%"
        b.setAttribute("style", "width:" + percent + "%;")

        setTimeout( () => {

            tick( b, s, e )

        }, 1000)
    }
    tick(bar, Date.now(), date.getTime())
    document.body.removeChild(document.forms[0])

}