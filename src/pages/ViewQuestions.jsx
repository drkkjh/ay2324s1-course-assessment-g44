import React, { useState } from 'react';
import Header from '../components/header'
import Navbar from '../components/navbar'
import Read from '../components/read'
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger } from '@mantine/core';
import Login from '../components/login';
import { Button } from 'semantic-ui-react';
import Create from '../components/create';


function ViewQuestions() {
  const [opened, { toggle }] = useDisclosure();
  const [state, setState] = useState(() => "READ")

    return (
        <AppShell
        header={{ height: 60 }}
        navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
        >
          <AppShell.Header>
            <Header />
          </AppShell.Header>
    
          <AppShell.Navbar p="lg">
            <Navbar/>
          </AppShell.Navbar>
    
          <AppShell.Main>
            { state === "READ" ? <Read setCreateState={() => setState("CREATE")}/> 
            : state === "CREATE" ? <Create />
            : <Login />
            }
          </AppShell.Main>
        </AppShell>
      );
    }
  
  export default ViewQuestions;