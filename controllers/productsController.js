/* Home page. */
exports.products_list = function(req, res){
    res.send('liste des produits');
  }
  exports.products_infos = function (req, res){
      res.send('Fiche produits:'+req.params.idproduct);
  }

  