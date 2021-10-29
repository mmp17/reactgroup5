import React, { Component } from 'react';
import { Stafflist } from '../shared/staff';
import { Table, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StaffComponent.css';

class Staff extends Component{

    constructor (props){
        super(props)

        this.state = {
            stafflist: Stafflist,
        }
    }

    
    render() {
        const onDelete = (id) => {
            // console.log(id);
            let newData = this.state.stafflist.filter((value) => value.id !==id);
            this.setState({
                stafflist: newData,
            });
        };
        console.log(this.state.value)
        const onFilter = ({target}) => {
            let newData = Stafflist.filter((value) => value.name.toLowerCase().includes(target.value.toLowerCase())
            );
            this.setState({stafflist: newData})
        };
        
        return(
           <div>
                <div className='container'>
                    <h3>Staff Information  </h3>
                    <div className='searchcontainer'>   
                        <InputGroup className="mb-3">
                            <Label for="exampleSelect">Search by</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                <option>First Name</option>
                                <option>Last Name</option>
                                <option>Position</option>
                                <option>Aga</option>
                                </Input>

                            <FormControl
                                onChange={onFilter}
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder='search name'
                            />  
                            <Button variant="outline-secondary" id="button-addon1">
                                SEARCH
                            </Button>
                        </InputGroup>
                    </div>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                
                            </th>
                        </tr>
                    </thead>
                    {this.state.stafflist.map((value) => (
                    <tbody>
                        <tr>
                            <th scope="row">
                                {value.id}  
                            </th>
                            <td>
                                {value.name}
                            </td>
                            <td>
                                {value.surname}
                            </td>
                            <td>
                                {value.position}
                            </td>
                            <td>
                                {value.age}
                            </td>
                            <td>
                                <span> 
                                <Button onClick={()=>onDelete(value.id)} className='button' variant="danger">Delete</Button> 

                                <Button className='button' variant="warning">Edit</Button>
                                </span>
                            </td>
                        </tr>
                        
                    </tbody>
                    

                    ))} 
                    </Table>
                       
                </div>
                        
            </div>
        );
    }
}

export default Staff;