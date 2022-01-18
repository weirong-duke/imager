import React, {useState} from 'react';
import './Dropdown.scss';

interface DropdownProps {
  defaultOptionName?: string;
  onSelectValue(value: string | number): void;
  options: {
    [key: string]: string | number
  };
}

const Dropdown = ({defaultOptionName, onSelectValue, options}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptionName, setSelectedOptionName] = useState<string>(defaultOptionName || '');
  const selectText = selectedOptionName || 'Please select an option'

  const handleClickOption = (optionName: string) => () => {
    setSelectedOptionName(optionName);
    onSelectValue(options[optionName]);
  }

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return <div className="Dropdown" onClick={toggleIsOpen}>
      <div className="Dropdown__text">{selectText} ⇩</div>
    <div className={`Dropdown__content ${isOpen ? 'Dropdown__content--open' : ''}`}>
      {
        Object.keys(options).map(optionName =>
          (<div
            key={optionName}
            className="Dropdown__option"
            onClick={handleClickOption(optionName)}>
            {optionName}
          </div>))
      }
    </div>
  </div>
}

export default Dropdown
