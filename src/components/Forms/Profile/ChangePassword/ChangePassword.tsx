import React, {FC} from 'react';
import {FormField} from '../../Common/FormField/FormField';
import {ChangePasswordInputs, ChangeProfileInputs} from './../types';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
import {Button} from "@/components/Forms/Common/Button/Button";
import {ButtonScales, ButtonVariant} from "@/components/Forms/Common/Button/types";

const validationSchema = yup.object({
  password: yup.string().required().min(7),
  newpassword: yup.string().required().min(7),
  repeatpassword: yup.string().oneOf([yup.ref('newpassword')], "Passwords don't match"),
});

export const ChangePassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordInputs>({
    resolver: yupResolver(validationSchema),
  });
  const { t } = useTranslation();
  const onSubmit: SubmitHandler<ChangeProfileInputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>Change password</strong>
        </p>
        <div>
          <FormField name={'password'} label={'password'} type={'password'} register={register('password')} errors={errors.password} />
        </div>
        <div>
          <FormField
            name={'newpassword'}
            label={'newpassword'}
            type={'password'}
            register={register('newpassword')}
            errors={errors.newpassword}
          />
        </div>
        <div>
          <FormField
            name={'repeatpassword'}
            label={'repeatpassword'}
            type={'password'}
            register={register('repeatpassword')}
            errors={errors.repeatpassword}
          />
        </div>
        <div>
          <Button variant={ ButtonVariant.primary} scale={ButtonScales.small}>{t('forms.profile.change')}</Button>
        </div>
      </form>
    </div>
  );
};
