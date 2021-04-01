@Plugin({
  options: {
    dataToggle: '[data-toggle]',
    dataOverlay: '[data-overlay]',
    clsOpen: 'open',

    dataMenu: '[data-menu-item]',
    dataMenuToggle: '[data-menu-toggle]',
    dataMenuSubmenu: '[data-menu-submenu]',
    clsActive: 'active',
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
      dataOverlay,
      dataMenuToggle
    } = this.options;

    this.$toggle = this.$element.find(dataToggle);
    this.$overlay = this.$element.find(dataOverlay);
    this.$menuToggle = this.$element.find(dataMenuToggle);
  }

  handleEvent () {
    this.$toggle
      .off('click')
      .on('click', () => this.onClickToggle());

    this.$overlay
      .off('click')
      .on('click', () => this.onClickOverlay());

    this.$menuToggle
      .off('click')
      .on('click', (event) => this.onClickMenu(event));

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

  onClickMenu (event) {
    const {
      clsActive,
      dataMenu,
      dataMenuSubmenu
    } = this.options;
    const target = $(event.currentTarget);
    const parent = target.parents(dataMenu);
    const submenu = parent.find(dataMenuSubmenu);
    const isActive = parent.hasClass(clsActive);

    parent.siblings(dataMenu).removeClass(clsActive);
    parent.siblings(dataMenu).find(dataMenuSubmenu).stop().slideUp(300);
    !isActive && parent.addClass(clsActive);
    !isActive && submenu.stop().slideDown(300);
    isActive && parent.removeClass(clsActive);
    isActive && submenu.stop().slideUp(300);
  }
}
