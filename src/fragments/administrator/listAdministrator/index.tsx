'use client'

import { getListAdmin } from '@/services/administrator';
import { Query } from '@utils/query';
import React from 'react';

export default function LisAdministrator(){  
  const admins = Query({ key:'getListAdmin',fn:getListAdmin });
  console.log(admins)
  return(
    // <TableView config={dataTable} data={elements}/>
    <div>test</div>
  )
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
