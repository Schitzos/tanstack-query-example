import { Button, Paper } from '@mantine/core';
import React from 'react';
import styles from './style.module.scss'
import { getListAdmin } from '@/services/administrator';
import RQHydrate from '@/components/elements/reactQueryHydrate';
import LisAdministrator from '@/fragments/administrator/listAdministrator';

export default async function Admin() {
  const hydrateQueries = [
    { key:'getListAdmin',fn:getListAdmin },
  ]
  const prefetchedQuery = {}
  return (
    <RQHydrate state={prefetchedQuery}>
      <Paper p="lg" className={styles.container}>
        <div className={styles.header}>
          <div className={styles.pageTitle}>
            <h2>Admin List</h2>
            <p>List of admin managing Econosphere</p>
          </div>
          <div>
            <Button>something</Button>
          </div>
        </div>
        <LisAdministrator/>
      </Paper>
    </RQHydrate>
  );
}

const dataTable = [
  { heading:'Element position',
    key:'position',
  },
  { heading:'Element name',
    key:'name',
  },
  { heading:'Symbol',
    key:'symbol',
  },
  { heading:'Atomic mass',
    key:'mass',
  },
  { heading:'Option',
    key:'option',
  },
]

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon',option:<Button size='xs'>something</Button> },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' ,option:<Button size='xs'>something</Button> },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' ,option:<Button size='xs'>something</Button> },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' ,option:<Button size='xs'>something</Button> },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' ,option:<Button size='xs'>something</Button> },
];