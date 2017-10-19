import React, { Component } from 'react';
import { Select,Button,Input,DatePicker,Form,Cascader } from 'antd';
import moment from 'moment';
import areaOptions from '../../common/area';   /* 地域数据 */
import Store from '../../../store'   /* store */


const { Option } = Select;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';

  class Search extends Component {

    state = {
      params:'',
      form:''
    }

    componentWillMount(){
      let {list_form,list_params} = this.props.agentList
      this.setState({
        params:list_params,
        form:list_form
      })
    }

    selectColumn(){
        const { type } = this.state.params,
              { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        if(type==='0'){
            const { kw_type } = this.state.form,
                  { kw_types } = this.state.params,
                  kwTypeError = isFieldTouched('kwType') && getFieldError('kwType'),
                  kwError = isFieldTouched('kw') && getFieldError('kw');
            return (
                <div className='di'>
                  <FormItem validateStatus={kwTypeError ? 'error' : ''} help={kwTypeError || ''}>
                    {getFieldDecorator('kwType', {
                       initialValue: kw_type
                    })(
                      <Select style={{ width: 130 }} key='s1'>
                        {
                          kw_types.map((item,key)=>{
                            return (<Option value={item.value} key={key}>{item.text}</Option>)
                          })
                        }
                      </Select>
                    )}
                  </FormItem>
                  <FormItem validateStatus={kwError ? 'error' : ''} help={kwError || ''}>
                    {getFieldDecorator('kw')(
                      <Input placeholder="请输入关键字" style={{ width: 220 }}/>
                    )}
                  </FormItem>
                </div>
            )
        }
        else if(type==='1'){
            const { time_type } = this.state.form,
                  { time_types } = this.state.params,
                  timeTypeError = isFieldTouched('timeType') && getFieldError('timeType'),
                  dateError = isFieldTouched('date') && getFieldError('date');
            return (
              <div className='di'>
                <FormItem validateStatus={timeTypeError ? 'error' : ''} help={timeTypeError || ''}>
                  {getFieldDecorator('timeType',{
                    initialValue: time_type
                  })(
                    <Select style={{ width: 130 }} key='s2'>
                      {
                        time_types.map((item,key)=>{
                          return (<Option value={item.value} key={key}>{item.text}</Option>)
                        })
                      }
                    </Select>
                  )}
                </FormItem>
                <FormItem validateStatus={dateError ? 'error' : ''} help={dateError || ''}>
                  {getFieldDecorator('date')(
                    <RangePicker format={dateFormat} style={{ width: 260 }}/>
                  )}
                </FormItem>
              </div>
            )
        }
        else {
          const areaError = isFieldTouched('area') && getFieldError('area');
            return (
              <FormItem validateStatus={areaError ? 'error' : ''} help={areaError || ''} >
                 {getFieldDecorator('area')(
                   <Cascader placeholder="请选择区域" options={areaOptions} style={{ width: 260 }}/>
                 )}
              </FormItem>
            )
        }
    }

    handleChange(v){
      this.setState({params:Object.assign({},this.state.params,{type:v})})
    }  

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, val) => {
        if (!err) {
          if(val.date){
             let arr = val.date.map((m)=>{
               return moment(m).format(dateFormat)
             })
             Object.assign(val,{
               start_time: arr[0],
               end_time: arr[1]
            })
          }
          console.log(val)
        }
      });
    }

    render() {

      const {type,types} = this.state.params,
          options = types.map((item,key)=>{
             return (<Option value={item.value} key={key}>{item.text}</Option>)
          }),
          { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
          // 用于和表单进行双向绑定,获取某个输入控件的 Error,判断一个输入控件是否经历过

      const searchTypeError = isFieldTouched('searchType') && getFieldError('searchType');

      return (
        <div className="_search_box c">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem validateStatus={searchTypeError ? 'error' : ''} help={searchTypeError || ''}>
              {getFieldDecorator('searchType', {
                  rules: [{ required: true }],
                  initialValue: type
              })(
                <Select style={{ width: 130 }} onChange={ v => this.handleChange(v)}>
                  {options}
                </Select>
              )}
            </FormItem>
            {this.selectColumn()}
            <FormItem>
              <Button type="primary" htmlType="submit" icon="search">查找</Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }

  export default Store(Form.create()(Search));
