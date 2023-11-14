import React from 'react';
import EmployeeCard from './EmployeeCard';

const AllUsers = () => {
  const name = "ayush";
  const email = "ayush@gmail.com";
  const role = "admin";
  let status = 'Offline'
  
  const email2 = "anand@gmail.com"
  return (
    <>
      <div className='pt-32 bg-blue-100'>
        <div>
          <h1 className='text-center text-4xl font-bold'>All Users</h1>
        </div>
        <div className='flex flex-wrap mt-20 mb-6 bg-blue-100 min-h-screen'>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email2} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>
          <EmployeeCard name={name} email={email} role={role} status={status}/>

        </div>
      </div>

    </>
  );
};

export default AllUsers;
