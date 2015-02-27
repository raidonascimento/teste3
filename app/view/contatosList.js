Ext.define('touchdemo.view.ContatosList', {
    requires: [
	'Ext.TitleBar',
	'Ext.field.Text'
    ],
    extend: 'Ext.dataview.List',
    alias: 'widget.contatoslist',
    config: {
	store: 'Contatos',
	itemTpl: '{nome} - {sobrenome}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'titlebar',
		ui: 'light',
		title: 'lista de contatos',
		items: [
		    {
			xtype: 'spacer'
		    },
		    {
			xtype: 'button',
			action: 'novoContato',
			text: 'Novo contato'
		    }

		]
	    }
	]

    }
});