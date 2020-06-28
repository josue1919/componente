import React ,{Component} from 'react';
import Micomponente from '../components/Micomponente.js';
import styled from 'styled-components';
import { ThunderboltOutlined,MobileOutlined  } from '@ant-design/icons';
import Miconponente from '../components/Micomponente.js';
import { useRouter } from "next/router";




function Contenedor(props){
  const router = useRouter();
  const {  slug } = props;
    return(
       <>
       
        
       
        <Scroll>
		<Cont >
        {["","","","","","","","","","","","","","","",""].map(()=><Miconponente></Miconponente>)}
        </Cont>
		</Scroll>
        
       </>
    )

}



const Cont = styled.div`
 display: flex;
  flex-direction: row; 
 


 
`


const FavoriteSupplierWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex: 0 1 calc(33% - 1rem);
	height: 515px;
	font-size: 14px;
	font-family: "Nunito Sans";
	color: #414141;
	cursor: pointer;

	.MuiButton-root {
		text-transform: none;
		padding: 0;
		margin: 0;
		color: #e03c31;
		font-family: inherit;
	}

	.score-binkys:not(:first-child) {
		margin-left: -4px;
	}
`;


const Scroll = styled.div`
 overflow-x: scroll;

 
`


export default Contenedor;