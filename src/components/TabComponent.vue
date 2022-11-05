<template>
  <div class="tab__tab-container">
    <div class="tab__button-container">
      <div
        :class="['tab__button', { 'tab__button--active': activeTab === tab }]"
        v-for="tab in props.tabs"
        :key="tab"
        @click="activeTab = tab"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab__content">
      <!-- FIX ME: 컴포넌트화 혹은 slot 사용 -->
      <table>
        <tbody>
          <tr v-for="computedInfo in computedInfos" :key="computedInfo.no">
            <td class="tab__content-table-cell--num">{{ computedInfo.no }}</td>
            <td class="tab__content-table-cell--title">
              {{ computedInfo.title }}
            </td>
            <td class="tab__content-table-cell--date">
              {{ computedInfo.createdAt }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="tab__content-more-btn" @click="routeTo">+</div>
    </div>
  </div>
</template>

<script setup>
import {
  newInfos,
  columnInfos,
  reviewInfos,
  boardInfos,
} from '../mock/mockData';
import { computed, ref } from 'vue';
const props = defineProps({
  tabs: { type: Array, required: true },
});
const activeTab = ref(props.tabs[0]);
// FIX ME : computed 속성 이름 변경 필요
const computedInfos = computed(() => {
  switch (activeTab.value) {
    case "What's new":
      return newInfos;
    case 'Column':
      return columnInfos;
    case '신학특강 요약과 Review':
      return reviewInfos;
    case '게시판':
      return boardInfos;
    default:
      return newInfos;
  }
});
function routeTo() {
  console.log(`${activeTab.value}으로 이동`);
}
</script>

<style lang="scss" scoped>
.tab__tab-container {
  width: 100%;
}
.tab__button-container {
  display: flex;
}

.tab__button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 360px;
  height: 84px;
  border: 1px solid #111e4b;
  border-left: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #111e4b;
    color: white;
  }
}

.tab__button:first-child {
  border-left: 1px solid #111e4b;
}

.tab__content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 285px;
  border-bottom: 1px solid #111e4b;

  table {
    // font-size: 23px;
    margin-top: 42px;
    width: 100%;

    td {
      padding-bottom: 20px;
    }
    .tab__content-table-cell--num {
      padding-left: 40px;
      width: 160px;
    }
    .tab__content-table-cell--title {
      padding-left: 120px;
    }

    .tab__content-table-cell--date {
      text-align: end;
      padding-right: 40px;
    }
  }
}

.tab__content-more-btn {
  position: absolute;
  font-size: 40px;
  right: 35px;
  bottom: 12px;
  cursor: pointer;
}

.tab__button--active {
  background-color: #111e4b;
  color: white;
}
@media (max-width: 800px) {
  .tab__button {
    height: 60px;
    font-size: 12px;
    padding: 9px;
    word-break: keep-all;
  }
  .tab__content {
    height: 240px;
    table {
      // font-size: 23px;
      margin-top: 42px;
      width: 100%;

      td {
        padding-bottom: 20px;
      }

      .tab__content-table-cell--num {
        padding-left: 5px;
        width: 40px;
      }

      .tab__content-table-cell--title {
        padding-left: 5px;
      }

      .tab__content-table-cell--date {
        text-align: end;
        padding-right: 5px;
      }
    }
  }
  .tab__content-more-btn {
    font-size: 30px;
    right: 5px;
  }
}
</style>
