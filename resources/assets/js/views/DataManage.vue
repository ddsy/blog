<template>
    <div>
        <el-row>
            <el-col class="title" :span="12" :offset="6">
                <h3><i class="iconfont icon-list"></i> 数据导入</h3>
                <p>外部数据导入系统，支持 txt/csv/excel 文件格式导入方式</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form class="import-form" ref="form" :model="form" label-width="80px">
                    <el-form-item label="编号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="导入类型">
                        <el-select v-model="form.datatype" @change="handleChangeDataType" placeholder="请选择要导入的数据类型">
                            <el-option label="银行数据" value="yinghang"></el-option>
                            <el-option label="房产数据" value="fangchan"></el-option>
                            <el-option label="航班数据" value="hangban"></el-option>
                            <el-option label="通话记录" value="tonghua"></el-option>
                            <el-option label="酒店数据" value="jiudian"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="form.datatype == 'yinghang'" label="银行">
                        <el-select v-model="form.datavalue" placeholder="请选择银行">
                            <el-option label="工商银行" value="gongshang"></el-option>
                            <el-option label="农业银行" value="nongye"></el-option>
                            <el-option label="建设银行" value="jianshe"></el-option>
                            <el-option label="民生银行" value="minsheng"></el-option>
                            <el-option label="浦发银行" value="pufa"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="form.datatype == 'hangban'" label="航空公司">
                        <el-select v-model="form.datavalue" placeholder="请选择航空公司">
                            <el-option label="东方航空" value="dongfang"></el-option>
                            <el-option label="南方航空" value="nanfang"></el-option>
                            <el-option label="首都航空" value="shoudu"></el-option>
                            <el-option label="春秋航空" value="chunqiu"></el-option>
                            <el-option label="长龙航空" value="changlong"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="form.datatype == 'tonghua'" label="运营商">
                        <el-select v-model="form.datavalue" placeholder="请选择运营商">
                            <el-option label="中国移动" value="yidong"></el-option>
                            <el-option label="中国联通" value="liantong"></el-option>
                            <el-option label="中国电信" value="dianxin"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="字段设置">
                        <el-select v-model="tagValue" clearable multiple placeholder="请选择">
                            <el-option
                                    v-for="item in tagOptions"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="导入方式">
                        <el-radio-group v-model="form.importtype">
                            <el-radio label="文件"></el-radio>
                            <el-radio disabled label="数据库"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="选择文件">
                        <el-upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :default-file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div class="el-upload__tip" slot="tip">只能上传txt/excel/csv文件</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即导入</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="sass" scoped>
    .title h3 {
        font-size: 30px;
        font-weight: 400;
        color: rgb(31, 47, 61);
    }

    .title p {
        font-size: 12px;
        color: rgb(31, 47, 61);
    }

    .import-form {
        box-shadow: 0 0 10px grey;
        padding: 20px;
    }

    .tags {
        display: inline-block;
        float: left;

    .el-tag {
        margin-left: 4px;
    }

    }
</style>
<script>
    export default {
        data() {
            return {
                form: {
                    name: (new Date()).getTime(),
                    datatype: 'tonghua',
                    importtype: '文件',
                    datavalue: '',
                    desc: ''
                },
                tagOptions: [{
                    value: 'name',
                    label: '名字'
                }, {
                    value: 'code',
                    label: '身份证'
                }, {
                    value: 'phone',
                    label: '手机号码'
                }, {
                    value: 'addr',
                    label: '住址'
                }, {
                    value: 'qq',
                    label: 'QQ'
                }, {
                    value: 'email',
                    label: '邮箱'
                }],
                tagValue: [],
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleChangeDataType() {
                this.$data.form.datavalue = '';
            },
            handleAddTag(e) {
                this.$data.tags.push({key: e.currentTarget.value, name: e.currentTarget.value, type: 'warning'});
                e.currentTarget.value = '';
            },
            onSubmit() {
                console.log('submit!');
            },
            handleClose(tag) {
                this.tags.splice(this.tags.indexOf(tag), 1);
            }
        }
    }
</script>