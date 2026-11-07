import React from 'react';

// 1. Define an interface for your item structure
interface User {
  id: number;
  name: string;
  role: string;
}

export default function TagList() {
  // 2. Define your data array with the TypeScript type
  const users: User[] = [
    { id: 1, name: 'Fantasy', role: 'Developer' },
    { id: 2, name: 'Science Fiction', role: 'Designer' },
    { id: 3, name: 'Military', role: 'Product Manager' },
    { id: 4, name: 'Romance', role: 'Product Manager' },
    { id: 5, name: 'Horror', role: 'Product Manager' },
    { id: 6, name: 'Mystery', role: 'Product Manager' },
    { id: 7, name: 'Thriller', role: 'Product Manager' },
    { id: 8, name: 'Western', role: 'Product Manager' },
    { id: 9, name: 'Historical Fiction', role: 'Product Manager' },
    { id: 10, name: 'Young Adult', role: 'Product Manager' },
  ];

  return (
    <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
      <h2>Story tags</h2>
      <ul>
        {/* 3. Use .map() to loop through the array */}
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
