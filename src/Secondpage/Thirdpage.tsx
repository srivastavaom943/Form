import  { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemText,

  Checkbox,

} from '@mui/material';


interface SubDepartment {
  id: number;
  name: string;
}

interface Department {
  id: number;
  department: string;
  subDepartments: SubDepartment[];
}

const jsonData: Department[] = [
  {
    id: 1,
    department: 'customer_service',
    subDepartments: [
      { id: 101, name: 'support' },
      { id: 102, name: 'customer_success' },
    ],
  },
  {
    id: 2,
    department: 'design',
    subDepartments: [
      { id: 201, name: 'graphic_design' },
      { id: 202, name: 'product_design' },
      { id: 203, name: 'web_design' },
    ],
  },
 
];

function Thirdpage() {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const handleToggleExpand = (index: number) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((id) => id !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  const handleToggleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((id) => id !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const isExpanded = (index: number) => expanded.includes(index);
  const isSelected = (index: number) => selected.includes(index);
  const isAllSubDepartmentsSelected = (index: number) =>
    jsonData[index].subDepartments.every((subDept) => isSelected(subDept.id));

  return (
    <List>
      {jsonData.map((department, index) => (
        <div key={department.id}>
          <ListItem >
            <ListItemButton onClick={() => handleToggleExpand(index)}>
             <Checkbox
                edge="start"
                checked={isAllSubDepartmentsSelected(index)}
           
              />
             
              <ListItemText primary={department.department} />
        
            </ListItemButton>
          </ListItem>
          <Collapse in={isExpanded(index)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDepartment) => (
                <ListItem key={subDepartment.id} sx={{ pl: 4 }}>
                  <ListItemButton onClick={() => handleToggleSelect(subDepartment.id)}>
                    <Checkbox
                      edge="start"
                      checked={isSelected(subDepartment.id)}
                
                    />
                    <ListItemText primary={subDepartment.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}



export default Thirdpage;
