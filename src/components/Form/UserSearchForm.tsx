// import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { UserSearchFormValue } from '@/types';

import FullWidthForm from './FullWidthForm';

export interface UserSearchFormProps {
  isLoading?: boolean;
  onChange: ((value: UserSearchFormValue) => void) | undefined;
  value: UserSearchFormValue | undefined;
}

export default function UserSearchForm({
  isLoading = false,
  onChange,
  value,
}: UserSearchFormProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<UserSearchFormValue>({
    defaultValues: value,
  });

  const onSubmit: SubmitHandler<UserSearchFormValue> = (formData) => {
    if (typeof onChange === 'function') {
      onChange(formData);
    }
  };

  return (
    <FullWidthForm onSubmit={handleSubmit(onSubmit)}>
      <Flex align="left" direction="column" gap="xs" mb="xs" w="100%">
        <Input
          disabled={isLoading}
          placeholder="Enter username"
          size="md"
          variant="filled"
          w="100%"
          {...{ ...register('keyword', { required: true, minLength: 3 }) }}
        />
        {errors?.keyword?.type === 'required' && (
          <Input.Error>Please enter username</Input.Error>
        )}
        {errors?.keyword?.type === 'minLength' && (
          <Input.Error>Please enter min. 3 characters</Input.Error>
        )}
        <Button
          leftIcon={<IconSearch size={16} />}
          loading={isLoading}
          size="md"
          type="submit"
          w="100%"
        >
          Search
        </Button>
      </Flex>
    </FullWidthForm>
  );
}
