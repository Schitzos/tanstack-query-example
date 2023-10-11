'use client'

import TableView from '@/components/elements/tableView';
import { getListAdmin } from '@/services/administrator';
import { Query } from '@utils/query';
import React from 'react';

export default function LisAdministrator(){  
  const admins = Query({ key:'getListAdmin',fn:getListAdmin });
  return(
    <TableView config={dataTable} data={admins?.data?.data}/>
  )
}

const dataTable = [
  { heading:'Nama',
    key:'name',
  },
  { heading:'Role',
    key:'role',
  },
  { heading:'Email',
    key:'email',
  },
  { heading:'Dibuat',
    key:'createdAt',
  },
]
