try {
var data = {};
$(function() {
  data.get = jQuery.getJSON('../files/data.json',function() {

if (data.get.status === 200) {
  if (data.get.readyState === 4) {
    console.log(data.get);
    data.base = JSON.parse(data.get.responseText)

  }
}
});
});

} catch (e) {
  console.log(e);
} finally {
    try {

    } catch (e) {
      console.log(e);
    } finally {
      data.skills = [];
      data.name = [];
      data.friends= [];

    }

};


try {
  setTimeout(function () {

  if (data.get.readyState === 4) {
    function lodash() {
      _.forEach(data.base, function(v,k){
        data.skills.push(v.skills);
        data.friends.push(v.friends.length);
      });
      _.filter(data.base, function(v) {
      data.name.push(v.name)
      });

      data.skillsShort = _.uniq(_.sortBy(_.flattenDeep(data.skills)));
      data.friendsQuality = _.sortBy(_.zipObject(data.name, data.friends));
      // data.friendsSort = _.sortBy(data.friendsQuality);
      // _.sortBy(data.skills, function(a,b,c) {
      //    console.log(a);
      //   console.log(b);
      //   console.log(c);
      //
      // });
  };
  lodash();
  }
}, 1000);

} catch (e) {
  console.log(e);

} finally {


};

// console.log(data.base);
