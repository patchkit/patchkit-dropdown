import React from 'react'
import cls from 'classnames'

function toItemObj (o) {
  if (typeof o == 'string')
    return { label: o }
  return o
}

function toItemValue (o) {
  if (o.value)
    return o.value
  return o
}

export class Dropdown extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    right: React.PropTypes.bool,
    hint: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onClose: React.PropTypes.func
  }
  render() {
    const onSelect = (item, i) => e => {
      this.props.onSelect && this.props.onSelect(toItemValue(item), i)
      item.onSelect && item.onSelect()
    }

    return <ul className={cls('dropdown', { open: this.props.isOpen, closed: !this.props.isOpen, right: this.props.right })} onMouseLeave={this.props.onClose}>
      { this.props.items.map((item,i) => {
        let itemObj = toItemObj(item)
        const onClick = onSelect(item, i)
        if (itemObj.Com) 
          return <itemObj.Com key={i} obj={itemObj} onClick={onClick} />
        return <li key={i} onClick={onClick}>{itemObj.label}</li>
      }) }
    </ul>
  }
}

export default class Btn extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    className: React.PropTypes.string,
    right: React.PropTypes.bool,
    hint: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onClose: React.PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  onOpen() {
    this.setState({ isOpen: true })
  }
  onClose() {
    this.setState({ isOpen: false })
  }
  onSelect(v, index) {
    this.setState({ isOpen: false })
    this.props.onSelect && this.props.onSelect(v, index)
  }
  render() {
    return <span className="dropdown-btn-container">
      <a className={cls('dropdown-btn', this.props.className, { right: this.props.right })} onClick={this.onOpen.bind(this)} data-hint={this.props.hint}>
        {this.props.children}
      </a>
      <Dropdown items={this.props.items} right={this.props.right} isOpen={this.state.isOpen} onClose={this.onClose.bind(this)} onSelect={this.onSelect.bind(this)} />
    </span>
  }
}
