'use client'
import { Button, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation';
import { Mutation } from '@/utils/query';
import { login } from '@/services/auth';

interface FormData {
  username: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const handleLoginMutation = Mutation(login,()=>{});
  const handleLoginForm = (formValue: FormData) => {
    handleLoginMutation.mutate(formValue)
  }

  return (
    <form onSubmit={handleSubmit(handleLoginForm)} className={styles.formContainer}>
      <TextInput
        label="Username"
        placeholder="input your username"
        error={errors.username?.message}
        {...register('username')}
      />
      <PasswordInput
        label="Password"
        placeholder="input your password"
        error={errors.password?.message}
        {...register('password')}
      />
      <div className={styles.forgetPassword}>
        Forgot password?
      </div>
      <Button className={styles.btnSubmit} fullWidth type='submit' disabled={handleLoginMutation.isLoading} >Sign in</Button>
    </form>
  );
}