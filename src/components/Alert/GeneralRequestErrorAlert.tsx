import { Alert, Button, Stack, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export interface GeneralRequestErrorAlertProps {
  onRetry: () => void;
}

export default function GeneralRequestErrorAlert({
  onRetry,
}: GeneralRequestErrorAlertProps) {
  return (
    <Alert
      color="red"
      icon={<IconAlertCircle size="1rem" />}
      title="Oops, something wrong!"
      w="100%"
    >
      <Stack>
        <Text>
          Your request cannot be processed. Please try again in a moment.
        </Text>
        <Button
          color="red"
          compact
          onClick={onRetry}
          p={0}
          variant="subtle"
          w="fit-content"
        >
          Retry
        </Button>
      </Stack>
    </Alert>
  );
}
