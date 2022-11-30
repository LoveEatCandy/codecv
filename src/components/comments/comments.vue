<script setup lang='ts'>
import Empty from '@/components/empty.vue';
import UserInfo from '@/components/userInfo.vue';
import Publish from '@/views/communityDetail/components/publish/publish.vue';
import { useReply } from './hook';
import Reply from './reply.vue';

const emits = defineEmits(['pageNumChange', 'reQueryComments'])
defineProps<{ data: Array<IComment>, articleId: number, total: number, commentsTotal: number }>();
const { currenId, reply, userInfo, remove } = useReply(emits);

</script>

<template>
  <div class="comments-container content-card">
    <span class="tip">评论/回复共 {{ total }} 条</span>
    <div v-if="data.length" class="comments-list mt-20 content-card">
      <div class="comment-item" v-for="comment of data">
        <user-info :user-info="comment.authorInfo" :publish-time='comment.createTime' />
        <p class="comment-content line-4">{{ comment.content }}</p>
        <ul class="list-style-init flex operator">
          <li class="mr-10" @click="reply(comment.commentId)">回复</li>
          <!-- <li class="mr-10">点赞</li> -->
          <li v-if="userInfo.uid === comment.authorId" @click="remove(comment.commentId, articleId, 1)">删除</li>
        </ul>
        <!-- 内容输入框 -->
        <Publish v-if="currenId === comment.commentId" :article-id="articleId" :level='2'
          :poster-comment-id='comment.commentId' @re-query-comments="$emit('reQueryComments')"
          :reply-author-id="comment.authorId" />
        <!-- 二级回复：内容 + 回复了谁-->
        <Reply :data='comment.children' :comment-id="comment.commentId" :article-id='articleId'
          @re-query-comments="$emit('reQueryComments')" v-if="comment.children.length" />
      </div>
      <el-pagination background layout="prev, pager, next" :total="commentsTotal" class="mt-4"
        @current-change="(page: number) => $emit('pageNumChange', page)" />
    </div>
    <Empty v-else title="还没有人发表评论..." />
  </div>
</template>

<style lang='scss' scoped>
.tip {
  color: #666;
}

.comments-container {
  margin-top: 20px;
}

.comment-item {
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background: var(--theme);
  }

  &::before {
    width: 10px;
    height: 10px;
    left: -20px;
    top: 10px;
    border-radius: 50%;
    opacity: .5;
    z-index: 2;
  }

  &::after {
    width: 1px;
    height: calc(100% + 20px);
    left: -16px;
    opacity: .2;
    top: 15px;
  }

  .comment-content {
    font-size: .9rem;
    color: #555;
  }

  margin-bottom: 25px;

  .operator {
    justify-content: flex-end;
    font-size: .8rem;
    color: #555;
  }
}
</style>