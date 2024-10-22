import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormItem from 'antd/es/form/FormItem'
import SocialLogin from './components/SocialLogin'
import { Button, Card, Input, Space, Typography, Form } from 'antd'

const { Title, Paragraph, Text } = Typography

const SignUp = () => {
  const [isLoading, setIsloading] = useState(false)
  const [isRemember, setIsRemember] = useState(false);
  //form of ant
  const [form] = Form.useForm()

  const handleSignup = (value: { email: string, password: string }) => {
    console.log(value)
  }

  return (
    <div>
      <Card>
        <div className='text-center'>
          <img src={'https://firebasestorage.googleapis.com/v0/b/kanban-project-a6612.appspot.com/o/Logo.png?alt=media&token=cf75ffdc-41fb-47ca-af1a-a7b1832ff8ba'}
            alt=""
            style={{
              width: '80px',
              height: '80px'
            }} />
          <Title>Create an account</Title>
          <Paragraph>Start your 30-day free trial.</Paragraph>
        </div>

        <Form
          layout='vertical'
          form={form}
          onFinish={handleSignup}
          disabled={isLoading}
          size='large'>

          {/* Name */}
          <Form.Item name={'name'} label='Name' rules={[{
            required: true,
            message: "Please name your email!!!"
          }]}>
            <Input placeholder='Enter your name' allowClear type='email' />
          </Form.Item>

          {/* Email */}
          <Form.Item name={'email'} label='Email' rules={[{
            required: true,
            message: "Please enter your email!!!"
          }]}>
            <Input placeholder='Enter your email' allowClear type='email' />
          </Form.Item>

          <Form.Item name={'password'} label='Password' rules={[{
            required: true,
            message: "Please enter your password!!!"
          }]}>
            <Input.Password placeholder='Enter your password' allowClear type='password' />
          </Form.Item>
        </Form>


        <div className="mt-4">
          <Button
            onClick={() => form.submit()}
            type='primary'
            style={{
              width: '100%',
              background: '#F15E2B'
            }}
            size='large'
          >
            Get started
          </Button>
        </div>
        <br />
        <SocialLogin />
        <div className='mt-4 text-center'>
          <Space>
            <Text type='secondary'>Already have an account?</Text>
            <Link to={'/'} style={{color:'#F15E2B'}}>Login</Link>
          </Space>
        </div>
      </Card>
    </div>
  )
}

export default SignUp