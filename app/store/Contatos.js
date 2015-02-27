Ext.define('touchdemo.store.Contatos',{
    extend: 'Ext.data.Store',
    
    config: {	
	model: 'touchdemo.model.Contato',
	proxy:{
	    type: 'localstorage',
	    id:'bancoteste'    
	}	
    },
    autoLoad: true,
    autoSync: true
});

