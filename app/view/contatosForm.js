
Ext.define('touchdemo.view.ContatosForm',{
    requires:[
	'Ext.data.Store',
	'Ext.Toolbar',
        'Ext.XTemplate',
	'Ext.data.proxy.LocalStorage',
	'Ext.form.FieldSet',
	'Ext.MessageBox'
	
    ],
    extend: 'Ext.form.Panel',
    alias: 'widget.contatosform',
    
    
    
    config:{
	items: [
	    {
		docked: 'top',
		xtype: 'titlebar',
		ui: 'light',
		itemID: 'toolbarFormContato',
		title: 'editando contato',
		
		items: [
		    {
			xtype: 'button',
			ui:'back',
			action:'voltarContatosList',
			text:'Contatos'
		    }
		]
	    },
	    {
		xtype:'fieldset',
		title:'Contato',
		items:[ 
		    { xtype: 'textfield',
		    name: 'nome',
		    label: 'Nome'
		    },
		    { xtype: 'textfield',
		    name: 'sobrenome',
		    label: 'Sobrenome'
		    },
		    { xtype: 'textfield',
		    name: 'endereco',
		    label: 'Endereco'
		    },
		    { xtype: 'textfield',
		    name: 'email',
		    label: 'Email'
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarContato',
		ui:'action',
		text:'Salvar'
	    },
	    {
		xtype: 'container',
		height: 20
	    },
	    {
		xtype: 'button',
		action: 'deletarContato',
		ui:'action',
		text:'Deletar',
		hidden: false
	    }
	]
    }
    
});