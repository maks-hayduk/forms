import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Button from 'components/Button';
import Input from 'components/Input';

const App: React.FC = () => {
  return (
    <Flex flexDirection="column" justifyContent="space-around">
      <Input />
      <Input />
      <Button> Click me </Button>
    </Flex>
  );
};

export default App;
