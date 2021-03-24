@Plugin({
  options: {
    dataToggle: '[data-toggle]',
    dataOverlay: '[data-overlay]',
    clsOpen: 'open',
  }
})
export default class Sidebar {
  init() {
    this.initDom();
    this.handleEvent();
  }

  initDom () {
    const {
      dataToggle,
      dataOverlay
    } = this.options;

    this.$toggle = this.$element.find(dataToggle);
    this.$overlay = this.$element.find(dataOverlay);
  }

  handleEvent () {
    this.$toggle
      .off('click')
      .on('click', () => this.onClickToggle());

    this.$overlay
      .off('click')
      .on('click', () => this.onClickOverlay());
  }

  onClickToggle () {
    const { clsOpen } = this.options;
    const isActive = this.$element.hasClass(clsOpen);

    !isActive && this.$element.addClass(clsOpen);
    isActive && this.$element.removeClass(clsOpen);
  }

  onClickOverlay () {
    const { clsOpen } = this.options;

    this.$element.removeClass(clsOpen);
  }
}