document.addEventListener('DOMContentLoaded', function () {
	let all__sections = document.querySelectorAll('section');
	let ul = document.querySelector('ul');
	all__sections.forEach(function(item,index){
		let nav =  item.getAttribute('data-nav');
		const li = document.createElement('li');
		const link = document.createElement('a');
		const text = document.createTextNode(nav);
		const fragment = document.createDocumentFragment();
		link.appendChild(text);
		li.appendChild(link);
		fragment.appendChild(li);
		ul.appendChild(fragment);

	})
/*****************************this is the scroll section **************************************************************/
	ul.addEventListener("click",()=>{
		const el = document.getElementById(event.target.textContent);
		el.scrollIntoView({behavior :"auto"});
	})
/**********************this code is to make the section into the view point get active class ***************************/


all__sections.forEach(function(item,index){
	window.addEventListener("scroll",function(){
		

		
		if(item.getBoundingClientRect().top<-200){
			item.classList.remove("your-active-class");
			}	

		else if(item.getBoundingClientRect().top>350){
			item.classList.remove("your-active-class");
			}	

		else {
			item.classList.add("your-active-class");
			}

		
		})
	})

/***************************this code is to make the link have class active when his section is active*******************/
	
	const all_links = document.querySelectorAll('li');
		ul.addEventListener("click",function(){
			all_links.forEach(function(item,index){
				const  act_section = document.querySelector('.your-active-class');
				const act_section_id = act_section.id;
				item.classList.remove("your-active-class");
				if(act_section_id===item.textContent){
					item.classList.add("your-active-class");
				}
				console.log(act_section_id);
			})
		})

	
	


})	

