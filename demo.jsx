import React from 'react'
import DropdownBtn from './index'
import { Dropdown } from './index'


class DropdownItemDemo extends React.Component {
  render() {
    return <li>Item: {this.props.obj.value}</li>
  }
}

const ITEMS1 = [
  'First',
  'Second',
  'Third'
]
const ITEMS2 = [
  { Com: DropdownItemDemo, value: 1 },
  { Com: DropdownItemDemo, value: 2 },
  { Com: DropdownItemDemo, value: 3 }
]

export default class DropdownDemo extends React.Component {
  render() {
    const onSelect = o => console.log('selected', o)
    const onClose = o => console.log('close')
    return <div>
      <h1>patchkit-dropdown</h1>
      <section className="demo-dropdown">
        <header>&lt;Dropdown items="..."&gt;</header>
        <div className="content" style={{minHeight: '100px'}}>
          <Dropdown items={ITEMS1} isOpen onSelect={onSelect} onClose={onClose} />
        </div>
      </section>
      <section className="demo-dropdown-customcom">
        <header>&lt;Dropdown items="..."&gt; (custom component)</header>
        <div className="content" style={{minHeight: '100px'}}>
          <Dropdown items={ITEMS2} isOpen onSelect={onSelect} onClose={onClose} />
        </div>
      </section>
      <section className="demo-dropdown-btn">
        <header>&lt;DropdownBtn items="..."&gt;</header>
        <div className="content">
          <DropdownBtn className="btn highlighted" items={ITEMS1} onSelect={onSelect} onClose={onClose}>Click to open</DropdownBtn>
        </div>
      </section>
      <section className="demo-dropdown-btn-right" style={{marginBottom: 200}}>
        <header>&lt;DropdownBtn items="..." right&gt;</header>
        <div className="content">
          <DropdownBtn right className="btn highlighted" items={ITEMS1} onSelect={onSelect} onClose={onClose}>Click to open</DropdownBtn>
        </div>
      </section>
    </div>
  }
}