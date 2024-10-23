import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
import handleApi from '../../apis/handleApi'

const { Title, Paragraph, Text } = Typography

const Login = () => {

    const [isLoading, setIsloading] = useState(false)
    const [isRemember, setIsRemember] = useState(false);
    //form of ant
    const [form] = Form.useForm()

    const handleLogin = async (values: { email: any; password: any }) => {
        console.log(values);

        try {
            const res = await handleApi('/auth/register', values, 'post');
            console.log(res)
        } catch (error) {
            console.log('error')
        }
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
                    <Title>Log in to your account</Title>
                    <Paragraph>Welcome back! Please enter your details.</Paragraph>
                </div>

                <Form
                    layout='vertical'
                    form={form}
                    onFinish={handleLogin}
                    disabled={isLoading}
                    size='large'>
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

                {/* remember */}
                <div className="row">
                    <div className="col" >
                        <Checkbox
                            checked={isRemember}
                            onChange={(val) => setIsRemember(val.target.checked)}>
                            Remember</Checkbox>
                    </div>
                    <div className="col text-end">
                        <Link to={'/'} style={{ color: '#F15E2B' }}>Forgot Password?</Link>
                    </div>
                </div>

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
                        Login
                    </Button>
                </div>
                <br />
                <SocialLogin />
                <div className='mt-4 text-center'>
                    <Space>
                        <Text type='secondary'>Don't have an account?</Text>
                        <Link to={'/sign-up'} style={{ color: '#F15E2B' }}>Sign up</Link>
                    </Space>
                </div>
            </Card>
        </div>
    )
}

export default Login