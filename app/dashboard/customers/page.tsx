import Table from '@/app/ui/customers/table';
import React from 'react';
import { fetchCustomers } from '@/app/lib/data';

export default async function Customers() {
  const fetchCustomersPage = await fetchCustomers();
  return (
    <div>
      <Table customers={fetchCustomersPage} />
    </div>
  );
}
