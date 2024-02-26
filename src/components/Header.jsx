import React from 'react';
import { AppShell, Burger, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <AppShell
          header={{ height: 80 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
          }}
          padding="md"
        >
          <AppShell.Header
            display="flex"
            justify-content="space-between"
            align-items="center"
            className="head"
          >
            <Link to="/">
              <Text>
                <h1>Countries</h1>
              </Text>
            </Link>
            <Button>Profile</Button>
          </AppShell.Header>
        </AppShell>
      </div>
    </div>
  );
};

export default Header;
