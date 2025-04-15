import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'

import { DataTablePaginated } from '@sqlrooms/data-table'

function MyDataTable() {
  const data = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 42 }
    // More data...
  ]

  const columns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'age', header: 'Age' }
  ]

  return (
    <DataTablePaginated
      data={data}
      columns={columns}
      pagination={{ pageSize: 10, pageIndex: 0 }} // Added pageIndex
    />
  )
}

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <Avatar size="large" src={logo} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
          </div>
          <div className="mt-8">
            <MyDataTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
