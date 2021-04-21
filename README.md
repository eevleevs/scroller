# scroller
A scroller object intended be used with Dragula as:

```javascript
dragula([elements])
    .on('cancel', scroller.stop)
    .on('drag', scroller.start)
    .on('drop', function() {
        scroller.stop()
        // what to do on drop
    })
```
