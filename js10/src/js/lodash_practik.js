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
      data.skills=[];
      data.name=[];
      data.friends=[];
      data.friendsName=[];
      data.friendsNameAll=[];
      data.friendsQualityName=[];


    }

};


try {
  setTimeout(function () {

  if (data.get.readyState === 4) {
    function lodash() {
      _.forEach(data.base, function(v,k){
        data.skills.push(v.skills);
        data.friends.push({'friends':v.friends.length});
        data.friendsName.push(v.friends);
      });
      _.filter(data.base, function(v) {
      data.name.push({'name':v.name})
      });
      _.forEach(_.flattenDeep(data.friendsName), function(v,k) {
        data.friendsNameAll.push(v.name);
      });

      data.friendsShort = _.uniq(_.sortBy(data.friendsNameAll));
      data.skillsShort = _.uniq(_.sortBy(_.flattenDeep(data.skills)));
      data.friendsQuality = _.sortBy(_.concat(_.zip(data.name, data.friends)), [function (o) {
        return  o[1].friends;
      }]);
       _.forEach(_.flattenDeep(data.friendsQuality), function (v,k) {
      data.friendsQualityName.push( v.name );
      });
      //
      // data.friendsSort = _.sortBy(data.friendsQuality);
      // _.sortBy(data.skills, function(a,b,c) {
      //    console.log(a);
      //   console.log(b);
      //   console.log(c);
      //
      // });
  };
  lodash();
  $(function () {
    $('body').html('<p> skills:'+data.skillsShort+'</p><p> This people have friends'+data.friendsQualityName+'</p><p> friends name'+data.friendsShort+'</p>');
  });
  }
}, 1000);

} catch (e) {
  console.log(e);

} finally {


};

// console.log(data.base);
