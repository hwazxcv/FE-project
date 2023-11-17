import { useTranslation } from 'react-i18next';
import { SubTitle } from '../commons/TitleStyle';
import { FiCrosshair } from 'react-icons/fi';
import { InputText } from '../commons/inputStyle';
import { FiDisc } from 'react-icons/fi';
import { ButtonGroup, BigButton } from '../commons/ButtonStyle';
import styled from 'styled-components';
import SizeNames from '../../styles/sizes';
import loadable from '@loadable/component';
import React from 'react';

const ErrorMessages = loadable(() => import('../commons/ErrorMessages'));
const { small, medium, big } = SizeNames;

const FormBox = styled.form`
  dl {
    display: flex;
    padding: 10px 15px;
    align-items: center;
  }

  dt {
    width: 130px;
    font-size: ${medium};
    font-weight: bold;
  }
  dd {
    flex-grow: 1;
  }
  dl + dl {
    border-top: 1px solid #d5d5d5;
  }

  dl:last-of-type {
    margin-bottom: 15px;
  }
  .agree_terms{
    text-align: center;

    svg{
      font-size:${big}
      vertical-align:middle;
    }
  }


  .terms {
    border: 1px solid #d5d5d5;
    height: 150px;
    padding: 10px;
    overflow: auto;
    font-size: ${small};
  }
`;

const JoinForm = ({ onSubmit, onChange, onToggle, form, errors }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit}>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputText
            type="text"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="email"></ErrorMessages>
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputText
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="password"></ErrorMessages>
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호 확인')}</dt>
        <dd>
          <InputText
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
          />
          <ErrorMessages
            errors={errors}
            field="confirmPassword"
          ></ErrorMessages>
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputText
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="name"></ErrorMessages>
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화 번호')}</dt>
        <dd>
          <InputText
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={onChange}
          />
          <ErrorMessages errors={errors} field="mobile"></ErrorMessages>
        </dd>
      </dl>
      <SubTitle align="conter" border_width={1} fsize="normal">
        {t('회원가입 약관')}
      </SubTitle>
      <pre className="terms">회원 가입 약관......</pre>
      <div className="agree_terms" onClick={onToggle}>
        {form.agree ? <FiDisc /> : <FiCrosshair />}
        {t('회원가입 약관에 동의 합니다.')}
      </div>
      <ErrorMessages errors={errors} field="agree" />
      <ButtonGroup>
        <BigButton
          type="submit"
          color="black"
          bcolor="black"
          height="50px"
          size="medium"
        >
          {t('가입하기')}
        </BigButton>
        <BigButton
          type="reset"
          color="white"
          bcolor="black"
          height="50px"
          size="medium"
          fcolor="black"
        >
          {t('다시입력')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(JoinForm);
