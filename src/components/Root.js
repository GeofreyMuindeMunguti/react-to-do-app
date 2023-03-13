import Layout from './layout/Layout'
import Dashboard from './dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Blogs from './blogs/Blogs';
import Contacts from './contacts/Contacts';

function Root(){
    return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contacts/>}/>
          </Route>
        </Routes>
    )
}
export default Root