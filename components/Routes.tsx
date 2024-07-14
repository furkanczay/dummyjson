"use client"
import React from 'react'
import Link from "next/link";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

type Props = {}

const Routes = (props: Props) => {
  const urls = [
    {
      url: "/api/products",
      endpoint: null,
      methods: "GET",
      category: "products",
      queryParams: "skip, limit"
    },
    {
      url: "/api/products/1",
      endpoint: "/api/products/{id}",
      methods: "GET",
      category: "products",
      queryParams: null
    },
    {
      url: "/api/users",
      endpoint: null,
      methods: "GET",
      category: "users",
      queryParams: "skip, limit"
    },
    {
      url: "/api/users/1",
      endpoint: "/api/users/{id}",
      methods: "GET",
      category: "users",
      queryParams: null
    }
  ]
  return (
    <section className='md:px-12'>
      <h2 id='routes' className="text-4xl font-extrabold mb-10 mt-10">Rotalar</h2>
      <Table isStriped className="w-full text-left text-gray-700 dark:text-gray-700 overflow-auto">
        <TableHeader>
          <TableColumn>URL</TableColumn>
          <TableColumn>METHODS</TableColumn>
          <TableColumn>QUERY PARAMS</TableColumn>
        </TableHeader>
        <TableBody items={urls} className="text-md text-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          {(url => (
            <TableRow key={url.category}>
              <TableCell className="px-6 py-3 dark:text-white">
                <Link className='text-blue-500' target='_blank' href={url.url}>{url.endpoint || url.url}</Link>
              </TableCell>
              <TableCell className="px-6 py-3 dark:text-white uppercase">
                {url.methods}
              </TableCell>
              <TableCell className="px-6 py-3 dark:text-white">
                {url.queryParams ? url.queryParams : "---"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default Routes