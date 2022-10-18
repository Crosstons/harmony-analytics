import React from 'react'

function DataTable() {
  return (
    <div>
        
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs  uppercase bg-hot text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
                <th scope="col" class="py-3 px-6">
                    Category
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-sss border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-spicy hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-hot border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-spicy hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default DataTable