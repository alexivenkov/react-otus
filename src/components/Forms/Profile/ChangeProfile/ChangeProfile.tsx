import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeProfileInputs } from './../types';
import { FormField } from '../../Common/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Forms/Common/Button/Button';
import { ButtonScales, ButtonVariant } from '@/components/Forms/Common/Button/types';

interface ChangeProfileProps {
  nickname?: string;
  about?: string;
  onSubmit?: (data: ChangeProfileInputs) => void;
}

const validationSchema = yup.object({
  nickname: yup.string().required(),
  about: yup.string(),
});

export const ChangeProfile: FC<ChangeProfileProps> = (props: ChangeProfileProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeProfileInputs>({
    resolver: yupResolver(validationSchema),
  });
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<ChangeProfileInputs> = props.onSubmit ? props.onSubmit : (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>Change profile</strong>
        </p>
        <div>
          <FormField
            type={'text'}
            name={'nickname'}
            defaultValue={props?.nickname}
            label={t('forms.profile.nickname')}
            register={register('nickname')}
            errors={errors.nickname}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'about'}
            defaultValue={props?.about}
            label={t('forms.profile.about')}
            register={register('about')}
            errors={errors.about}
          />
        </div>
        <div>
          <Button variant={ButtonVariant.primary} scale={ButtonScales.small}>
            {t('forms.profile.save')}
          </Button>
        </div>
      </form>
    </div>
  );
};
