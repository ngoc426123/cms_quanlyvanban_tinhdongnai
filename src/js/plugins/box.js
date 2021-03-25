@Plugin({
  options: {
    dataMenuMore: '[data-menu-more]',
    dataToggleMenuMore: '[data-toggle]',
    clsOpenMenuMore: 'active',
  }
})
export default class Box {
  init() {
    this.initDom();
    this.handleEvent();
  }

  initDom () {
    const {
      dataToggleMenuMore
    } = this.options;

    this.$toggleMenuMore = this.$element.find(dataToggleMenuMore);
  }

  handleEvent () {
    this.$toggleMenuMore
      .off('click')
      .on('click', (event) => this.onClickToggleMenuMore(event));
  }

  onClickToggleMenuMore (event) {
    const { dataMenuMore, clsOpenMenuMore } = this.options;
    const target = $(event.currentTarget);
    const parents = target.parents(dataMenuMore);
    const isActive = parents.hasClass(clsOpenMenuMore);

    console.log(isActive);

    !isActive && parents.addClass(clsOpenMenuMore);
    isActive && parents.removeClass(clsOpenMenuMore);
  }
}