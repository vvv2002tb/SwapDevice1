<template>
  <div class="tablebank">
    <div class="foo">
      <p style="padding-top:10px; padding-right:20px" >Xin chào, Anhtd  <a-avatar style="background-color: #f56a00"  size="64">
        A
      </a-avatar> </p>
    </div>


    <div class="table-body">
      <div class="table-funtion">
        <p class="options-table" style="text-align: left; padding: 20px 0px 0px 20px;">Chức năng:
          <a class="addicon" @click="handleAdd"> <plus-outlined />


            <a-modal
                v-model:visible="visible"
                title="Thêm ngân hàng"
                :confirm-loading="confirmLoading"
                @ok="handleOk"
            >
              <a-input class="input-infoBank" v-model:value="value1" show-count :maxlength="20" placeholder="Tên Ngân Hàng"/>
              <br/>
              <a-input class="input-infoBank" v-model:value="value2" show-count :maxlength="7" placeholder="Tên Viết Tắt"/>
              <br/>
              <a-input  class="input-infoBank" v-model:value="value3" show-count :maxlength="20" placeholder="Số Tài Khoản"/>
            </a-modal>
          </a>
          <a class="deleteicon" @click="showDeleteConfirm"> <delete-outlined /></a>
          <a class="editicon" > <edit-outlined /></a>



        </p>
      </div>
      <a-table :data-source="data" :columns="columns">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <a-checkbox
                v-model:checked="checkAll"
                :indeterminate="indeterminate"
                @change="onCheckAllChange"
            >

            </a-checkbox>
            <span style="color: Black; margin-left: 10px;">Ngân hàng</span>
          </template>
        </template>
        <template
            #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
        >
          <div style="padding: 8px">
            <a-input
                ref="searchInput"
                :placeholder="`Search ${column.dataIndex}`"
                :value="selectedKeys[0]"
                style="width: 218px; margin-bottom: 8px; display: block"
                @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
            />
            <a-button
                type="primary"
                size="small"
                style="width: 120px; margin-right: 8px"
                @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template  #icon><SearchOutlined  /></template>
              Tìm kiếm
            </a-button>
            <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
              Reset
            </a-button>
          </div>
        </template>
        <template #customFilterIcon="{ filtered }">
          <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
        <template #bodyCell="{ text, column }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
            v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
        </template>
      </a-table>


    </div>
  </div>



</template>
<script>
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined,} from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs, createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';


const data = [{
  key: '1',
  name: 'Vietcombank',
  age: 'Vcb',
  address: '',
}, {
  key: '2',
  name: 'Viettinbank',
  age: 42,
  address: '',
}, {
  key: '3',
  name: 'Jim Green',
  age: 32,
  address: '',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: '',
}];
export default defineComponent({
  components: {
    SearchOutlined,
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
  },

  setup() {
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });

    const modalText = ref('Content of the modal');
    const visible = ref(false);
    const confirmLoading = ref(false);

    const handleAdd = () => {
      visible.value = true;
    };

    const handleOk = () => {
      modalText.value = 'Thêm thành công!';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
        message.success('Thêm thành công');
      }, 2000);

    };
    const searchInput = ref();
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      customFilterDropdown: true,
      onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    }, {
      title: 'Tên viết tắt',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Số tài khoản',
      dataIndex: 'address',
      key: 'address',
      customFilterDropdown: true,
      onFilter: (value, record) => record.address.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    }];

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = clearFilters => {
      clearFilters({
        confirm: true,
      });
      state.searchText = '';
    };



    const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Xoá',
        okType: 'danger',
        cancelText: 'Huỷ',
        onOk() {
          message.success('Xoá thành công');
        },
        onCancel() {
          message.warning('Bạn đã huỷ');
        },
      });
    };


    return {
      data,
      columns,
      handleSearch,
      handleReset,
      searchInput,
      showDeleteConfirm,
      ...toRefs(state),
      modalText,
      visible,
      confirmLoading,
      handleAdd,
      handleOk,
    };
  },

});
</script>
<style scoped>


.foo {
  display: flex;
  justify-content: end;


  height: 50px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.table-body {
  margin-top: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.addicon {

  font-size: 15px;

  margin-left: 15px;

}

.deleteicon {
  font-size: 15px;

  margin-left: 15px;
}

.editicon {
  font-size: 15px;

  margin-left: 15px;
}


.input-infoBank {
  padding: 10px;
  margin: 15px 0 15px 0;
}
</style>