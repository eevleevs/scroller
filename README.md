# scroller
A scroller object intended be used with [Dragula](https://bevacqua.github.io/dragula/) and [jQuery](https://jquery.com/) as:

```javascript
dragula([elements])
    .on('cancel', scroller.stop)
    .on('drag', scroller.start)
    .on('drop', function() {
        scroller.stop()
        // what to do on drop
    })
```
