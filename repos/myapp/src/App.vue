<template>
  <div id="app">
    <div id="nav">
       <el-table
    :data="daskList"
    stripe
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="票据ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="draftNum"
      label="票据单"
      width="180">
    </el-table-column>
    <el-table-column
      prop="acceptor"
      label="兑现人"
      width="180"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="dealDate"
      label="到期日期"
      width="150">
    </el-table-column>
    <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click.once="editUser(scope.row,scope.$index)">下单</el-button>
        </template>
      </el-table-column>
  </el-table>
   <el-table
    :data="arr"
    stripe
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    style="width: 100%">
    <el-table-column
        prop="id"
        label="票据ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="draftId"
      label="票据单"
      width="150">
    </el-table-column>
    <el-table-column
      prop="saleCompany"
      label="卖方公司"
      width="200"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="buyCompany"
      label="买方公司"
      width="130">
    </el-table-column>
    <el-table-column
      prop='status'
      label="订单状态"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column label="操作" width="320">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click.stop="cenCel(scope.row,scope.$index)" v-if="scope.row.status=='waiting'||scope.row.status=='payment'">取消</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="next(scope.row,scope.$index)" v-if="scope.row.status=='waiting'||scope.row.status=='payment'">下一步</el-button>
        </template>
      </el-table-column>
  </el-table>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// import { BaseOrde } from './js/api.js'
import { BaseOrde } from 'test-module/js/api2'
import { Basesheng } from 'test-module/js/api'
  export default {
    data() {
      return {
        daskList: [],
        taskList:[],
        arr:[]
      }
    },
    methods: {
      editUser(row, index) {
        console.log(index, row);
        this.daskList.splice(index,1)
        this.taskList[index].status="waiting"
        this.arr.push(this.taskList[index])
        
      },
      cenCel(row,index){
        console.log(row,index)
        row.status = 'cencel'
        // this.taskList.splice(index,1,row)
        // this.arr.splice(index,1,row)
      },
      next(row,index){
         console.log(row,index)
        if(row.status=='waiting'){
          row.status='payment'
        }else if(row.status=='payment'){
          row.status='finish'
        }
        // this.arr.splice(index,1,row)
      }
    },  
    async created(){
      this.daskList = await BaseOrde.getData()
      this.taskList = await Basesheng.getData()
      // console.log(this.taskList)
      // jdsfdjlkfj
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin: 0 auto!important;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
