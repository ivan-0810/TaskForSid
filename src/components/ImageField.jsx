import React, { useState } from 'react';

const ImageField = ({
  // input,
  id,
  containerClassName = 'form-group',
  label,
  inline,
  btnLabel,
  removeLabel,
  handleChange,
  image
}) => {
  // const previewUrl = preview && preview.url ? preview.url : '';
  // const previewWidth = preview && preview.width ? preview.width : 'inherit';
  // const previewHeight = preview && preview.height ? preview.height : 'inherit';
  // const [image, setimage] = useState(previewUrl);
  // const handleChange = e => {
  //   // input.onChange(e.target.files[0]);
  //   const file = e.target.files;
  //   console.log(file);
  //   const reader = new FileReader();
  //   reader.onload = event => {
  //     setimage(event.target.result);
  //     setImageWidth('inherit');
  //     setImageHeight('inherit');
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };
  const reset = e => {
    // setimage('');
    // input.onChange('');
  };

  const newContainerClassName = `${containerClassName} ${inline ? ' row' : ''}`;
  return (
    <div className={newContainerClassName}>
      <div className={inline && inline[1]}>
        <div className="file-cloud">
          <input
            type="file"
            id={id}
            className="d-none"
            onChange={handleChange}
          />
          <div className={image && 'mb-2'}>
            {image && (
              <img
                src={image}
                style={{
                  maxWidth: '100%',
                  width: 'inherit',
                  height: 'inherit'
                }}
                alt={label}
              />
            )}
          </div>
          {image ? (
            <button
              type="button"
              className="btn btn-light btn-sm mb-1"
              onClick={() => reset()}
            >
              {removeLabel || 'Remove'}
            </button>
          ) : (
            <label htmlFor={id} className="btn btn-light btn-sm cursor-pointer">
              {btnLabel || 'Browse'}
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageField;
