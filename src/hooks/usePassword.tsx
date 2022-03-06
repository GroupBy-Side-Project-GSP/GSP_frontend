import { useState, useCallback } from 'react';

const usePassword = (initialForm: any) => {
  const [form, setForm] = useState(initialForm);

  const handlePasswordType = useCallback(() => {
    setForm(() => {
      if (!form.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  }, []);
  return [form, handlePasswordType];
};
export default usePassword;
