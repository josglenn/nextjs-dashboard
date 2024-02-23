import Table from '@/app/ui/customers/table';
import React, { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { CreateCustomer } from '@/app/ui/invoices/buttons';

export default async function Customers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const fetchCustomersPage = await fetchCustomers();

  return (
    <div>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateCustomer />
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table customers={fetchCustomersPage} />
      </Suspense>
    </div>
  );
}
