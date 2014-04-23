exports.index=function(req,res)
	{
		res.render('ali_index');
	}
	
exports.new=function(req,res)
	{
		res.render("uzair_new_form");
	}

exports.create=function(req,res)
	{
	res.send("Create Request"+
	"<br><input type='button' value='Go Back 2 Pages' onClick='history.go(-2)'>");
	}

exports.show=function(req,res)
	{
	res.send("Show: -->> "+req.params.id+"<br><input type='button' value='Go Back 2 Pages' onClick='history.go(-2)'>");
	}

exports.edit=function(req,res)
	{
	res.render("edit_form");
	}

exports.update=function(req,res)
	{
	res.send("Update: -->> "+req.params.id+
	"<br><input type='button' value='Go Back' onClick='history.go(-1)'>");
	}

exports.destroy=function(req,res)
	{
	res.send("Destroy: -->> "+req.params.id+
	"<br><input type='button' value='Go Back' onClick='history.go(-1)'>");
	}
