$.when(
    $.getScript( "https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs-pro@3/dist/fp.min.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

    FingerprintJS.load({token: 'fdhLq7lLfrg75SoMtCFJ'})
      .then(fp => fp.get())
      .then(result => alert(result.visitorId));

});
