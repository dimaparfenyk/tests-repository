const refs={
    input:document.querySelector('#name-input'),
    output:document.querySelector('#name-output'),
};

const changeOutputTextByInput=e=>{
    const query=e.currentTarget.value;
    const{output}=refs;

   if(query==='') {
    return output.textContent='Anonymous';
    };

   output.textContent=query;
};

refs.input.addEventListener('input',changeOutputTextByInput);