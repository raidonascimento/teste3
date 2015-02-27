Ext.Loader.setConfig({
	enabled: true
    
});
Ext.application({
    
    name : 'touchdemo',
        
    controllers: [
	'Main'
    ],
    views: [
	'ContatosList',
	'ContatosForm'
    ],
    
    models:[
	'Contato'
    ],

    stores:[
	'Contatos'
    ],
    viewport:{
	layout:{
	    type:'card',
	    animation:  {
		type:'slide'
	    }
	}
    },
    
    launch: function(){

	
    }
    
    
});