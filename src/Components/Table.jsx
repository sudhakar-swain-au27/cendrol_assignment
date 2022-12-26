import React from 'react'
import JsonData from './data.json'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
                    <td>{info.price}</td>
					<td>{info.uom}</td>
                    <td>{info.qty}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="data-table" >
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name Of The Material</th>
                    <th>PRICE</th>
                    <th>UOM</th>
					<th>Quantity</th>
                    <th>Total</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
