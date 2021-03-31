@Plugin({
  options: {
    dataMenu: '[data-menu]',
    dataToggle: '[data-toggle]',
    clsActive: 'active',
  }
})
export default class MenuNav {
  init() {
    this.initDom();
    this.handleEvent();
  }

  initDom () {
    const {
      dataToggle
    } = this.options;

    this.$toggle = this.$element.find(dataToggle);
  }

  handleEvent () {
    this.$toggle
      .off('click')
      .on('click', (event) => this.onClickToggle(event));
  }

  onClickToggle (event) {
    const {
      clsActive,
      dataMenu
     } = this.options;
    const target = $(event.target);
    const parents = target.parents(dataMenu);
    const isActive = parents.hasClass(clsActive);

    parents.siblings(dataMenu).removeClass(clsActive);
    !isActive && parents.addClass(clsActive);
    isActive && parents.removeClass(clsActive);
  }
}
