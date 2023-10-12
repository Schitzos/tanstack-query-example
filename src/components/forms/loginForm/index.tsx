'use client'
import { Button, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation';
import { Mutation } from '@/utils/query';
import { authLogin } from '@/services/auth';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
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
  const router = useRouter()
  const handleLoginMutation = Mutation(authLogin,()=>handleRedirect());
  
  const handleLoginForm = (formValue: FormData) => {
    handleLoginMutation.mutate(formValue)
  }

  const handleRedirect = ()=>{
    router.push('/')
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(handleLoginForm)} className={styles.formContainer}>
      <TextInput
        label="Email"
        placeholder="input your email"
        error={errors.email?.message}
        {...register('email')}
      />
      <PasswordInput
        label="Password"
        placeholder="input your password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Button className={styles.btnSubmit} fullWidth type='submit' disabled={handleLoginMutation.isLoading} >Sign in</Button>
    </form>
  );
}
