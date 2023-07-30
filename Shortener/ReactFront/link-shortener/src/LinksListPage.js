import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddLinkModal} from './AddLinkModal';

export class LinksListPage extends Component{

    constructor(props){
        super(props);
        this.state={Links:[], addModalShow:false}
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

    deleteLink(LinkId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'LinksShortener/'+LinkId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {Links}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});

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
                                <td>
                                    <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteLink(Link.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Link</Button>

                    <AddLinkModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>

            </div>
        )
    }
}