import React from "react";
import { Link } from 'react-router-dom';
import { Print } from '../../components/Print'
import '../../index.scss';

export function Home() {
       if (localStorage.length === 0) {
         return  <Link className="Menu-list__link largeTile" to="/create">Create your first list!</Link>
       }
      return <Print />
}