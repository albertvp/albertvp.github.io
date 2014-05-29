window.api = {
  post: function(url, data, ok) {
    api.request('post', url, data, ok);
  },
  get: function(url, data, ok) {
    api.request('get', url, data, ok);
  },
  getTemplate: function(url,ok){
  	api.request('get', url, 'tmpl', ok);
  },
  request: function(method, url, data, ok) {
    $.ajax({
      type: method,
      url: url,
      data: data,
      success: function(resp){
      	if (typeof resp==='string') return ok(data==='tmpl' ? resp : JSON.parse(resp));
      	ok(resp||true);
      },
      error: function(){
      	ok(null);
      }
    });
  }
}