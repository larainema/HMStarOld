/**
 * 通过标签得到项目
 */
function hmstar_main_get_project_by_tag(url) {
  $.ajax({
    url: url,
    success: function(data) {
      if (data.status == 1) {
        $('#carousel-example-generic').html(data.msg);
      } else {
        $('#carousel-example-generic').html(data.msg);
      }
      return true;
    }
  })
}
/**
 * 大家投的项目
 */
function hmstar_main_get_project_by_vote(type) {
  var vote_type = $('#vote-option:checked').val();
  type = type ? type : 'all';
  //alert(type);
  $.ajax({
    url: "/hmstar/project/projectlist/",
    data: {
      vote_type: vote_type,
      type: type,
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $('#hmstar-vote-body').html(data.msg);
      } else {
        $('#hmstar-vote-body').html(data.msg);
      }
      return true;
    }
  })
}
/**
 * 赞一下
 */
function hmstar_home_favour(project_id) {
  $.ajax({
    url: "/hmstar/project/favour/",
    data: {
      project_id: project_id,
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $("#favourCount").html(parseInt($("#favourCount").html()) + 1);
      } else {
        popBox(data.info, 'info', 3, function() {
          if (data.nologin != undefined) {
            common_show_user();
          }
        });
      }
    }
  })
}
/**
 * 关注
 */
function hmstar_home_attention(project_id) {
  $("#attention").unbind("click");
  var op = Math.abs(isAttention - 1);
  $.ajax({
    url: "/hmstar/project/attention/",
    data: {
      op: op,
      project_id: project_id,
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        isAttention = op;
        if (op) {
          $("#attentionCount").html(parseInt($("#attentionCount").html()) + 1);
          $("#attentionText").html("已关注");
        } else {
          $("#attentionCount").html(parseInt($("#attentionCount").html()) - 1);
          $("#attentionText").html("关注");
        }
      } else {
        popBox(data.info, 'info', 3, function() {
          if (data.nologin != undefined) {
            hmstar_common_show_user();
          }
        });
      }
      $("#attention").bind("click", attention);
    }
  })
}

/**
 * 免费投票
 */
function hmstar_home_freevote(project_id) {
  $.ajax({
    url: "/hmstar/project/freevote/",
    data: {
      project_id: project_id,
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $("#voteCount").html(parseInt($("#voteCount").html()) + 1);
      } else {
        popBox(data.info, 'info', 3, function() {
          if (data.nologin != undefined) {
            hmstar_common_show_user();
          }
        });
      }
    }
  })
}
/**
 * 公司介绍
 */
function hmstar_home_describe(project_id,op) {
  $.ajax({
    url: "/hmstar/project/describe/",
    data: {
      project_id:project_id,
      op:op,
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $('#hmstar-home-body').html(data.msg);
      } else {
        $('#hmstar-home-body').html(data.msg);
      }
      return true;
    }
  })
}
/**
 * 标签转换
 */
function hmstar_tag_change(video_id) {
  $('#hmstar-tag-img').attr("src","/assets/images/hmstar-main-tag-"+video_id+".jpg");
}
/**
 * 视频
 */
function hmstar_home_video(video_name) {
  $('#hmstar-home-video > embed').remove();
  var str ='<embed src="'+ video_name +'" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed><span>.</span>';
  $('#hmstar-home-video').html(str);
}
/**
 * CEO视频
 */
function hmstar_home_ceo_video(project_id) {
  $.ajax({
    url: "/hmstar/project/meetbyproject/",
    data: {
      project_id:project_id,
    },
    dataType: 'json',
    success: function(data) {
      //alert(data.meetbyproject);
      if (data.status == 1) {
        $('#hmstar-home-video > embed').remove();
        var str ='<embed src="'+ data.meetbyproject['meetVideo'] +'" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed><span>.</span>';
        $('#hmstar-home-video').html(str);
      } else {
        $('#hmstar-home-video').attr("style","display:none");
      }
      return true;
    }
  })

}
/**
 * Meet CEO
 */
function hmstar_meet_old_pre() {
  $.ajax({
    url: "/hmstar/project/meetbypage/",
    data: {
      p:page,
      action:"pre",
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $('#hmstar-meet-old').html(data.msg);
        if(page == 1){
          page = pagecount;
        }else{
          page = page - 1;
        }
      } else {
        $('#hmstar-meet-old').html(data.msg)
      }
      return true;
    }
  })
}
function hmstar_meet_old_next() {
  $.ajax({
    url: "/hmstar/project/meetbypage/",
    data: {
      p:page,
      action:'next',
    },
    dataType: 'json',
    success: function(data) {
      if (data.status == 1) {
        $('#hmstar-meet-old').html(data.msg);
        if(page == pagecount){
          page = 1;
        }else{
          page = page + 1;
        }
      } else {
        $('#hmstar-meet-old').html(data.msg)
      }
      return true;
    }
  })
}
/**
 * Get deep by type
 */
function hmstar_deep_get_deep(type) {
  type = type ? type : 'all';
  //alert(type);
  $.ajax({
    url: "/hmstar/project/deep/",
    data: {
      type: type,
    },
    dataType: 'json',
    success: function(data) {
      return true;
    }
  })
}
