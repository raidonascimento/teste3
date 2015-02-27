Ext.define('touchdemo.controller.Main',{
    
    
    requires:[
	'Ext.MessageBox'
	
    ],
    
    
    
    
    extend: 'Ext.app.Controller',
	config:{
	
	routes:{
	    '': 'showContatosList',
	    'index.html':'showContatosList'    
	},
	refs: {
	    contatosList:{
		xtype:'contatoslist',
		selector: 'contatoslist',
		autoCreate: true
	    },
	    contatosForm:{
		xtype:'contatosform',
		selector:'contatosform',
		autoCreate: true
		
	    },
	
	    salvarContatoBtn: 'button[action = salvarContato]',
	    deletarContatoBtn: 'button[action = deletarContato]',
	    toolbarFormContato: '#toolbarFormContato'
	},
	control:{
	    'button[action = mudarPainel1]':{
	    tap: 'showContatosList'
	    },
	    'button[action = novoContato]':{
	    tap: 'showContatosForm'
	    }
	    ,
	    'button[action = voltarContatosList]':{
	    tap: 'showContatosList'
	    },
	    
	    contatosList: {
		itemtap:'showContatosForm'
	    },
	    salvarContatoBtn:{
		tap: 'salvarContato'
	    },
	    deletarContatoBtn:{
		tap:'deletarContato'
	    }
	}
	
	
    },
  
    showContatosList: function(){
	Ext.Viewport.setActiveItem(this.getContatosList());
    },
   
    showContatosForm: function(view, index, target,record,evt,opts){
	
	
	if (record && record.data){
	    this.getContatosForm().setRecord(record);
	    //this.getToolbarFormContato().setTitle(record.get('nome'));
	    this.getDeletarContatoBtn().show();
	}else{  
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    //this.getToolbarFormContato().setTitle('criando novo contato');	   
	    this.getDeletarContatoBtn().hide();
	     
	}
	 
	Ext.Viewport.setActiveItem(this.getContatosForm());
	
	
    },
 salvarContato : function(){


     var form = this.getContatosForm(),
	    contato = Ext.create('touchdemo.model.Contato',form.getValues());
	    store = Ext.getStore('Contatos');
		
	if (form.getRecord() !== null){ 
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    console.log('contado editado com sucesso');
	}
	else{
	    store.add(contato);
	    console.log('nvo contato criado');
	}
	this.showContatosList();
    },
    
    deletarContato: function (){

	Ext.Msg.confirm(
	'deletar contato',
	'tem certeza?',
	function(btn){
	    if (btn === 'yes'){
		Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
	    	this.showContatosList();
	    }
	},this	);
    }
});