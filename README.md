# progress
Progress bar component, great for holding the user's attention

## Install

```shell
    npm install --save progressbardottop
```
```javascript
    import ProgressBar from 'progressbardottop'

    let bar = new ProgressBar({
        selector: "#progressbar",
        hideOnComplete: true,
    })

    bar.start( 100000 ) // optional timeout parameter will increment progress until the timeout is reached
    bar.update( 0.5 ) // update manually
    bar.configure({ hidden: true })
```