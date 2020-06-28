import React ,{Component} from 'react';
import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import Icon, { ThunderboltOutlined,MobileOutlined  } from '@ant-design/icons';

class Contenido extends Component{
    render(){

        var{imagen,titulo}=this.props
        return(
            <>
            <p >{imagen}</p>
            <p >{titulo}</p>
      
            </>
        )
    }
}



const Miconponente=()=>{
    return(
        <>
       
       <Targeta>
            <div className="target" >
            <Contenido titulo={"ofertas"} imagen={<ThunderboltOutlined className="icon"/>}></Contenido>
            </div>
           
        </Targeta>
    
       
        </>
    )
}




const Targeta = styled.div`
 display: flex;
 
background-color:#FFFCFC ;

 /* align-content:center; */
 
 /* justify-content:center; */

    .target{
        
        transform: translate(-205.268 ,-651.75);
        width: 100px;
        height: 120px;
        margin: 16px 4px 0;
        padding: 0 12px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        border-bottom: 4px solid #3483fa;

    }

    .title{

        font-size: 12px;
        color: #666;
        font-weight: 400;
        white-space: pre-line;
        height: 28px;
        line-height: 1.17;
        display:flex;
        /* align-content:center; */
        justify-content:center;
    }
    .icon{
        margin-top:10px;
        font-size:50px;
        color:#3483fa;
        text-align: -webkit-match-parent;
        
    }
 
`


//para poder exportar
export default Miconponente;