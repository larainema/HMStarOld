<?php $this->load->view('hmstar/includes/css')?>
<?php $this->load->view('hmstar/includes/top')?>
<?php $this->load->view('hmstar/includes/menu')?>
<?php if (!empty($industrys1)) { ?>
<div class="hmstar-industry hmstar-vote-detail">
  <div class="hmstar-main-red-tag"></div>
  <div class="hmstar-main-red-line-tag1"></div>
  <div class="hmstar-industry-header">
    <span>行业分类</span>
  </div>
  <div class="hmstar-industry-body">
    <table class="table hmstar-industry-body-table">
      <tbody>
        <tr>
          <?php foreach ($industrys1 as $item):?>
            <?php if($item->industryId == $industry_id){?>
          <td><a class="hmstar-orange" href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }else{?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }?>
          <?php endforeach;?>
        </tr>
        <tr>
          <?php foreach ($industrys2 as $item):?>
            <?php if($item->industryId == $industry_id){?>
          <td><a class="hmstar-orange" href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }else{?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }?>
          <?php endforeach;?>
        </tr>
        <tr>
          <?php foreach ($industrys3 as $item):?>
            <?php if($item->industryId == $industry_id){?>
          <td><a class="hmstar-orange" href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }else{?>
          <td><a href="/hmstar/project/industry/<?php echo $item->industryId?>"><?php echo $item->industryName;?></a></td>
            <?php }?>
          <?php endforeach;?>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<?php } ?>
<?php if (!empty($tags)) { ?>
  <div>
   <ul class="hmstar-tag-nav">
     <li><b>标签</b></li>
     <?php foreach ($tags as $item):?>
       <?php if($item->videoId == $video_id){?>
         <li><a class="hmstar-green" href="/hmstar/project/video/<?php echo $item->videoId;?>"><?php echo $item->videoName;?></a></li>
       <?php }else{?>
         <li><a href="/hmstar/project/video/<?php echo $item->videoId;?>"><?php echo $item->videoName;?></a></li>
       <?php }?>
     <?php endforeach;?>
   </ul>
 </div>
<?php } ?>
<script src="/assets/js/hmstar-project.js"></script>
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
<?php $this->load->view('hmstar/includes/footer')?>
<?php $this->load->view('hmstar/includes/js')?>
<script type="text/javascript">
hmstar_main_get_project_by_vote('all');
</script>
