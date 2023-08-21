import  { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IPost from './models/IPost';
import fetchData from './Services/Fetchdata';


function Displaydata() {
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'name', headerName: 'Name', width: 400 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns}  />
    </div>
  );
}

export default Displaydata
