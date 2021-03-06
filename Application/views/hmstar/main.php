<!--广告位-->
<div class="hmstar-news">
<div class="hmstar-main-red"></div>
<div class="hmstar-main-red-line"></div>
<div class="hmstar-news-box">
  <div class="hmstar-news-img" id="focus">
    <ul>
    <?php if (!empty($news)) { ?>
      <?php foreach ($news as $item):?>
      <li><a href="<?php echo $item->newsHref;?>" target="_blank"><img src="<?php echo $item->newsImg;?>" alt="<?php echo $item->newsAlt;?>"></a>
      <?php endforeach;?>
    <?php }?>
    </ul>
  </div>
  <div class="hmstar-news-alt">
    <ul>
      <li class="f48">商业聚集黑马</li>
      <li class="f64">投票决定未来</li>
    </ul>
  </div>
</div>
</div>
<!--标签-->
<script src="/assets/js/hmstar-project.js"></script>
<div class="hmstar-tag">
  <div class="hmstar-main-red-tag"></div>
  <div class="hmstar-main-red-line-tag1"></div>
   <div>
    <ul class="hmstar-tag-nav">
      <li><b>标签</b><span>大家都在看</span></li>
      <?php foreach ($tags as $item):?>
          <!-- <li><a onclick="hmstar_main_get_project_by_tag('/hmstar/includes/tag/<?php echo $item->videoId;?>')" href="javascript:void(0);"><?php echo $item->videoName;?></a></li> -->
          <li><a href="/hmstar/project/video/<?php echo $item->videoId;?>" onmouseover="hmstar_tag_change('<?php echo $item->videoId;?>')"><?php echo $item->videoName;?></a></li>
      <?php endforeach;?>
    </ul>
  </div>
      <div class="hmstar-tag-content">
        <img src="/assets/images/hmstar-main-tag-1.jpg" id="hmstar-tag-img"></img>
      </div>
</div>

<div class="hmstar-cd">
  <div class="hmstar-main-red"></div>
  <div class="hmstar-main-red-line"></div>
  <div class="col-sm-6">
    <div>
      <div class="hmstar-cd-panel-heading">
        <h3 class="hmstar-cd-panel-title">商业服务</h3><a class="hmstar-cd-panel-title-small" href="/hmstar/project/collaborateall">查看更多<img src="/assets/images/hmstar-main-tag-right.png" width="10px"></img></a>
      </div>
      <div class="hmstar-cd-panel-body">
        <?php if (!empty($collaborates)) { ?>
          <?php foreach ($collaborates as $item):?>
            <ul>
              <li><a href="/hmstar/project/collaborate/<?php echo $item->collaborateId?>"><img src="<?php echo $item->collaborateLogo?>"></img></a></li>
            </ul>
          <?php endforeach;?>
        <?php } ?>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div>
    <div class="hmstar-cd-panel-heading-right">
      <h3 class="hmstar-cd-panel-title-right">黑马深度</h3><a class="hmstar-cd-panel-title-small" href="/hmstar/project/deep">深度文章 我们的观点<img src="/assets/images/hmstar-main-tag-right.png" width="10px"></a>
    </div>
    <div class="hmstar-cd-panel-body-right">
      <?php if (!empty($deeps)) { ?>
        <?php foreach ($deeps as $item):?>
          <ul>
            <li class="f22"><img src="/assets/images/hmstar-main-deep.png" style="width:30px;margin-bottom:5px"></img><a href="/hmstar/project/deepid/<?php echo $item->deepId?>"><?php echo $item->deepTitle;?></a></li>
            <li class="color-red mt-10">发表于：<?php echo $item->deepTime;?> 作者：<?php echo $item->deepUser;?></li>
            <br/>
          </ul>
        <?php endforeach;?>
      <?php } ?>
    </div>
  </div>
  </div>
</div>

<div class="hmstar-industry">
  <div class="hmstar-main-red-tag"></div>
  <div class="hmstar-main-red-line-tag1"></div>
  <div class="hmstar-industry-header">
    <span>行业分类</span>
  </div>
  <?php if (!empty($industrys1)) { ?>
  <div class="hmstar-industry-body">
    <table class="table hmstar-industry-body-table">
      <tbody>
        <tr>
          <?php foreach ($industrys1 as $item):?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
          <?php endforeach;?>
        </tr>
        <tr>
          <?php foreach ($industrys2 as $item):?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
          <?php endforeach;?>
        </tr>
        <tr>
          <?php foreach ($industrys3 as $item):?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
          <?php endforeach;?>
        </tr>
      </tbody>
    </table>
  </div>
  <?php } ?>
</div>

<div class="hmstar-vote">
  <div class="hmstar-main-red-tag"></div>
  <div class="hmstar-main-red-line-tag"></div>
  <div class="hmstar-vote-header">
    <span>大家投</span>
  </div>
  <div class="hmstar-vote-well">
    <div class="hmstar-vote-input">
    <input type='radio' onclick="hmstar_main_get_project_by_vote('all')" name="vote-option" id="vote-option" value='vote-all' autocomplete='off' checked>全部
    <input type='radio' onclick="hmstar_main_get_project_by_vote('vote-before')" name="vote-option" id="vote-option" value='vote-before' autocomplete='off'>预热中
    <input type='radio' onclick="hmstar_main_get_project_by_vote('vote-in')" name="vote-option" id="vote-option" value='vote-in' autocomplete='off'>投票中
    <input type='radio' onclick="hmstar_main_get_project_by_vote('vote-after')" name="vote-option" id="vote-option" value='vote-after' autocomplete='off'>已完成
    </div>
  </div>
  <ul class="hmstar-vote-nav">
    <li role="presentation" onclick="hmstar_main_get_project_by_vote('all')" class="active"><a href="javascript:void(0);">综合推荐</a></li>
    <li role="presentation" onclick="hmstar_main_get_project_by_vote('new')"><a href="javascript:void(0);">最新上线</a></li>
    <li role="presentation" onclick="hmstar_main_get_project_by_vote('top')"><a href="javascript:void(0);">TOP 10</a></li>
    <li role="presentation" onclick="hmstar_main_get_project_by_vote('comment')"><a href="javascript:void(0);">评论最多</a></li>
 </ul>
 <div><p></div>
 <div id="hmstar-vote-body" class="hmstar-vote-body">
 </div>
</div>
<script type="text/javascript">
//hmstar_main_get_project_by_tag('/hmstar/includes/tag/1');
hmstar_main_get_project_by_vote('all');
</script>
