import React, { useEffect, useRef, useState } from 'react';
import { ImageButton } from '../../../buttons.styles';

interface FlagUploadProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const FlagUpload: React.FC<FlagUploadProps> = ({ setFieldValue }) => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        setPreviewUrl(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 1) {
      const flagFile = event.target.files[0];

      setFile(flagFile);
      setFieldValue('flag', flagFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
        onChange={handleFileChange}
      />
      <ImageButton type="button" onClick={pickImageHandler}>
        {file ? (
          <>
            Zmień flagę <img src={previewUrl} alt="Flaga" />
          </>
        ) : (
          'Wybierz flagę'
        )}
      </ImageButton>
    </>
  );
};

export default FlagUpload;
