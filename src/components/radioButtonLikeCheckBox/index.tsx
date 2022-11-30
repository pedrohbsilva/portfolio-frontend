import { InputHTMLAttributes, ReactElement } from 'react';

import { InputCheckbox } from './styles';

const RadioButtonLikeCheckBox = ({
  type = 'radio',
  name,
  id,
  checked,
  onChange,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  return (
    <InputCheckbox
      type={type}
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
  );
};

export default RadioButtonLikeCheckBox;
