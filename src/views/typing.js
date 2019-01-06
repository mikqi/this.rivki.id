class TxtRotate {
  constructor (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  tick () {
    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    const that = this
    let delta = 300 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }
}

window.runTextRotator = function () {
  const elements = document.getElementsByClassName('txt-rotate')
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate')
    const period = elements[i].getAttribute('data-period')
    if (toRotate) {
      const play = new TxtRotate(elements[i], JSON.parse(toRotate), period)
      play.tick()
    }
  }
  // INJECT CSS
  const css = document.createElement(`style`)
  css.type = `text/css`
  css.innerHTML = `.txt-rotate > .wrap { border-right: 0.08em solid #2199e8; color: #2199e8}`
  document.body.appendChild(css)
}
