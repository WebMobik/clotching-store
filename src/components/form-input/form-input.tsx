import React from 'react'

import './form-input.styles.scss'

type FormInputProps = {
  name: string
  type: string
  value: string
  handleChange: React.ChangeEventHandler
  label: string
  required: boolean
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
