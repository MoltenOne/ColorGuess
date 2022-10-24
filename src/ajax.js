let mydata = {};
let globalDifValue = 0;

function ajax(params) {
  var request = new XMLHttpRequest();
  request.open(params.method, params.url, params.async || true);
  request.setRequestHeader('Content-Type', params.contentType || 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        if (params.success) params.success(this.responseText, this.statusText, this.status);
      } else {
        if (params.error) params.error(this);
      }
    } else {
      if (params.error) params.error(this);
    }
  };
  request.send(params.data ? JSON.stringify(params.data) : '');
  request = null;
}

ajax({
  url: '../colors.json',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  success: function(response, statusText, status) {
    mydata = JSON.parse(response);
    console.log(mydata);
  },
  error: function(XHR) {
    console.log('Ajax Error', XHR);
  }
});