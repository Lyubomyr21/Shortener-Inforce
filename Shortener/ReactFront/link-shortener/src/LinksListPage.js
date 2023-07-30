import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

//import {Button,ButtonToolbar} from 'react-bootstrap';
//import {AddDepModal} from './AddDepModal';
//import {EditDepModal} from './EditDepModal';

export class LinksListPage extends Component{

    constructor(props){
        super(props);
        this.state={Links:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'LinksShortener')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Links:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {Links}=this.state;

        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>LongLink</th>
                            <th>ShortLink</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Links.map(Link=>
                            <tr key={Link.id}>
                                <td>{Link.id}</td>
                                <td>{Link.longLink}</td>
                                <td>{Link.shortLink}</td>
                                <td>Edit/Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}