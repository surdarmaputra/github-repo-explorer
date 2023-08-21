import { useState } from 'react';

import { Button, Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export interface UserSearchFormValue {
  keyword: string;
}

export interface UserSearchFormProps {
  value: UserSearchFormValue | undefined;
  onChange: ((value: UserSearchFormValue) => void) | undefined;
}

export default function UserSearchForm({
  value,
  onChange,
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
        onChange={(event) => setKeyword(event?.target?.value)}
        placeholder="Enter username"
        size="md"
        value={keyword}
        variant="filled"
        w="100%"
      />
      <Button
        leftIcon={<IconSearch size={16} />}
        onClick={applyFilters}
        size="md"
        w="100%"
      >
        Search
      </Button>
    </Flex>
  );
}
