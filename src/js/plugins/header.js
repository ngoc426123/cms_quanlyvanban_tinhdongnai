@Plugin({
  options: {
    dataMember: '[data-member]',
    dataMemberToggle: '[data-member-toggle]',
    clsActiveMember: 'active',
  }
})
export default class Header {
  init() {
    this.initDom();
    this.handleEvent();
  }

  initDom () {
    const {
      dataMember,
      dataMemberToggle
    } = this.options;

    this.$member = this.$element.find(dataMember);
    this.$memberToggle = this.$element.find(dataMemberToggle);
  }

  handleEvent () {
    this.$memberToggle
      .off('click')
      .on('click', () => this.onClickToggleMember());
  }

  onClickToggleMember () {
    const { clsActiveMember } = this.options
    const isActive = this.$member.hasClass(clsActiveMember);

    !isActive && this.$member.addClass(clsActiveMember);
    isActive && this.$member.removeClass(clsActiveMember);
  }
}