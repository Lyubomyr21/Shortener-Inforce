import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Info extends Component{

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
                            <th>Author</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Links.map(Link=>
                            <tr key={Link.id}>
                                <td>{Link.id}</td>
                                <td>{Link.longLink}</td>
                                <td>{Link.shortLink}</td>
                                <td>User {Link.id-35}</td>
                                <td>{Link.createdDate}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
