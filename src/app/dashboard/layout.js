import Router from './router.jsx'
export default function DashboardLayout({ children }) {
  return (
  <div className='grid grid-cols-1 md:grid-cols-4  min-h-screen'>
   <div className=' md:col-span-1 col-span-0'>
   <Router />
   </div>
   <div className='md:col-span-3 col-span-0'>
   {children}
   </div>
  </div>
  );
}
