import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/member/LoginForm';

export const LoginContainer = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const { t } = useTranslation();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 필수 항목 검증 S */
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
      };
      /* 필수 항목 검증 E */
    },
    [form, t],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setForm((form) => ({
      ...form,
      [target.name]: target.value,
    }));
  }, []);

  return (
    <>
      <LoginForm onChange={onChange} onSubmit={onSubmit} errors={errors} />
    </>
  );
};
