class CardMove {
  constructor (selector, options) {
    this.resolveOptions(options)
    this.listenMove(selector)
  }

  resolveOptions (options = {}) {
    this.angle = (typeof options.angle === 'number') ? options.angle : 30
    this.perspective = (typeof options.perspective === 'number') ? options.perspective : 300
    this.horizontal = (typeof options.horizontal === 'boolean') ? options.horizontal : true
    this.vertical = (typeof options.vertical === 'boolean') ? options.vertical : true
    this.speed = (typeof options.speed === 'number') ? options.speed : 500
  }

  listenMove (selector) {
    let elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
      this.onMove(elements[i])
    }
  }

  onMove (panel) {
    let content = panel.querySelector('.card-content')

    let angle = (typeof this.getAttr(panel, 'angle') === 'number') ? this.getAttr(panel, 'angle') : this.angle
    let perspective = (typeof this.getAttr(panel, 'perspective') === 'number') ? this.getAttr(panel, 'perspective') : this.perspective
    let horizontal = (typeof this.getAttr(panel, 'horizontal') === 'boolean') ? this.getAttr(panel, 'horizontal') : this.horizontal
    let vertical = (typeof this.getAttr(panel, 'vertical') === 'boolean') ? this.getAttr(panel, 'vertical') : this.vertical
    let speed = (typeof this.getAttr(panel, 'speed') === 'number') ? this.getAttr(panel, 'speed') : this.speed

    content.style.transition = `all ${speed}ms cubic-bezier(.40, .575, .565, 1)`

    panel.addEventListener('mouseout', (e) => {
      content.style.transform = `perspective(${perspective}px)
                                 rotateY(0deg)
                                 rotateX(0deg)`
    })

    panel.addEventListener('mousemove', (e) => {
      let w = panel.clientWidth
      let h = panel.clientHeight

      let x = (vertical) ? ((1 - (e.offsetY - h * 0.5)) / h * angle) : 0
      let y = (horizontal) ? ((e.offsetX - w * 0.5) / w * angle) : 0

      content.style.transform = `perspective(${perspective}px)
                                 rotateX(${x}deg)
                                 rotateY(${y}deg)`
    })
  }

  getAttr (selector, attr) {
    attr = `data-card-${attr}`

    if (selector.hasAttribute(attr)) {
      return JSON.parse(selector.getAttribute(attr))
    }
  }
}

module.exports = CardMove
