import { useState } from 'react';

import { Button, Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { UserSearchFormValue } from '../types';

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
  const [keyword, setKeyword] = useState(value?.keyword || '');

  const applyFilters = () => {
    if (typeof onChange === 'function') {
      onChange({
        keyword,
      });
    }
  };

  return (
    <Flex align="center" direction="column" gap="xs" mb="xs" w="100%">
      <Input
        disabled={isLoading}
        onChange={(event) => setKeyword(event?.target?.value)}
        placeholder="Enter username"
        size="md"
        value={keyword}
        variant="filled"
        w="100%"
      />
      <Button
        leftIcon={<IconSearch size={16} />}
        loading={isLoading}
        onClick={applyFilters}
        size="md"
        w="100%"
      >
        Search
      </Button>
    </Flex>
  );
}
