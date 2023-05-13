var xmlns='http://www.w3.org/2000/svg',conf={},e={
    a:document.createElement('a'),
    div:document.createElement('div'),
    nav:document.createElement('nav'),
    img:document.createElement('img'),
    span:document.createElement('span'),
    form:document.createElement('form'),
    input:document.createElement('input'),
    button:document.createElement('button'),
    label:document.createElement('label'),
    script:document.createElement('script'),
    svg:document.createElementNS(xmlns,'svg'),
    g:document.createElementNS(xmlns,'g'),
    line:document.createElementNS(xmlns,'line'),
    rect:document.createElementNS(xmlns,'rect'),
    text:document.createElementNS(xmlns,'text'),
    path:document.createElementNS(xmlns,'path'),
    circle:document.createElementNS(xmlns,'circle'),
};
e.script.type='text/javascript';
window.onload=function(){h=document.head,b=document.body;
    file = e.input.cloneNode();
    file.type = 'file'
    b.appendChild(file)
    file.addEventListener("change", function(){
        var read = this.files[0];
        var reader = new FileReader();
        reader.readAsText(read);
        reader.addEventListener('load', function(){
              conf = JSON.parse(reader.result);
              disp();
        });
    });
};

function disp(){
    console.log(conf)
    for (var vpc in conf.EC2.VPC){
        var VPC = container('VPC', vpc)
        VPC.className += ' inline';
        b.appendChild(VPC)
        console.log(vpc)
        for(var subnet in conf.EC2.Subnet){
            var Subnet = container('Subnet', subnet)
            VPC.appendChild(Subnet)
            console.log(Subnet)
        }
    }
}

function container(type, id){
    var container = e.div.cloneNode()
    var label = e.label.cloneNode()
    var img = e.img.cloneNode()
    container.setAttribute('id', id)
    container.setAttribute('class', 'container')
    container.setAttribute('type', type)

    img.setAttribute('src', 'img/'+ type + '.png')
    img.setAttribute('width', '48px')
    img.setAttribute('height', '48px')
    label.innerHTML = id

    container.appendChild(img)
    container.appendChild(label)
    return container
}