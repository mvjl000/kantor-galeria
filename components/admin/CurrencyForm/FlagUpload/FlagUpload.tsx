import React, { useEffect, useRef, useState } from 'react';
import { ImageButton } from '../../../buttons.styles';

const FlagUpload: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<FileReader | string | ArrayBuffer | null>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    console.log('PICKED FILE >>>>', pickedFile);
  };

  const pickImageHandler = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  return (
    <>
      <input
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/svg+xml"
        onChange={pickedHandler}
      />
      <ImageButton type="button" onClick={pickImageHandler}>
        Wybierz flagę
        {/* <img
          src={FLAG_URL}
          alt="Flaga nowej waluty"
        /> */}
      </ImageButton>
    </>
  );
};

export default FlagUpload;
