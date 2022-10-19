import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Print } from '../../components/Print'
import '../../index.scss';

export function Home() {
       if (localStorage.length === 0) {
         return  <Link className="List__link largeTile" to="/create">Create your first list!</Link>
       }
      return <Print />
}

// ponizej kod alternatywny ze statem
// export function Home() {
//     const [openForm, setOpenForm] = useState(false);
//
//
//     return (
//         <>
//             {openForm
//                 ? <div>formularz</div>
//                 : <div>dane</div>
//             }
//             <button onClick={() => setOpenForm(!openForm)}>toggle form</button>
//         </>
//
//     )
// }