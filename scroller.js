export let scroller = {
    interval: 10,
    step: 10,
    zone: 100,
    start: () => {
        scroller.enabled = true
        $(document).mousemove(e => { scroller.clientY = e.clientY })
        scroller.tick()
    },
    stop: () => { 
        scroller.enabled = false
        $(document).unbind('mousemove')
    },
    tick: () => {
        if (!scroller.enabled) 
            return
        let direction = 0
        if (scroller.clientY) {
            let dst = $(document).scrollTop()
            if (scroller.clientY < scroller.zone && dst > 0)
                direction = -1
            else {
                let dh = $(document).height()
                let wh = $(window).height()
                if (scroller.clientY > wh-scroller.zone && dst < dh-wh-1)
                    direction = 1
            }
        }
        window.scrollBy(0, scroller.step*direction)
        setTimeout(scroller.tick, scroller.interval)
    },
}
