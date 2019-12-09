import React from "react"
import Layout from '../components/layout'
import myicon from '../../static/images/office.svg';
import ProjectCard from '../components/project_card';


export default () => (
		<Layout>
		<div>
			<div css={{display:`flex`,alignItems:'center'}}>
				<div css={{display:'flex',width:'100vw',flexWrap:'wrap',boxSizing:'border-box',marginTop:'100px'}}>
					<div css={{display:'flex',width:'50%',justifyContent:'center',alignItems:'center'}} >
						<img src={myicon} alt="icon" css={{width:'80%'}} /> 
					</div>
					<div css={{display:'flex',flexDirection:'column',width:'50%',justifyContent:'center',alignItems:''}}>
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