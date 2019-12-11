import React from "react"
import Layout from '../components/layout'
import myicon from '../../static/images/office.svg';
import ProjectCard from '../components/project_card';


export default () => (
		<Layout>
			<div>
			<div css={{display:`flex`}}>
				<div css={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',marginTop:'3em'}}>
					<div css={{display:'flex',justifyContent:'center',alignItems:'center'}} >
						<img src={myicon} alt="icon" css={{width:'60%'}} /> 
					</div>
					<div css={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'left'}}>
						<h2>I am Lorem Lipsum</h2>
						<p>lorem lipsum adasd a sd a d a sdasdas dasdasd asdas dasda </p>
					</div>
				</div>
			</div>
			<div css={{display:`flex`,alignItems:'center',justifyContent:'center',marginTop:'100px',marginBottom:'100px'}}>
			    <ProjectCard>
			    <h1>Project</h1>
			    </ProjectCard>
			</div>
			</div>
		</Layout>
	)