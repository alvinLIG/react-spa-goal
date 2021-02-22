import React from 'react';

const Text = ({
  label = '',
  type = 'text',
  value = '',
  ...props
}) => {
  return (
    <div className="text">
      <label className="text-label">{label}</label>

      <input
        {...props}
        className="text-input"
        id={props.id}
        type={type}
        value={value || ''}
      />
    </div>
  );
}

export default Text;
