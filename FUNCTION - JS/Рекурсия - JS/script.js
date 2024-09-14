let x = 0


function work() {
    console.log(x)
    x++;
    if (x < 10) {
        work()
    }
}

work()

