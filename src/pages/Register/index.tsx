import React from 'react'
import { Button, Row, Form, Input } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'umi'

const Page: React.FC = () => {
    const [form] = Form.useForm()
    const onFinish = (values: object) => {

    }
    return (
        <>
            <Row
                align="middle"
                justify="center"
                style={{ display: 'flex', background: '#ddd', minHeight: '100vh' }}
            >
                <div style={{ width: 370, padding: 33, background: '#fff' }}>
                    <h3 className="tc mt-10m">注册</h3>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: '不是有效的电子邮箱',
                                },
                                {
                                    required: true,
                                    message: '电子邮箱必填',
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="输入您的电子邮箱" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="请输入你的密码"
                            />
                        </Form.Item>
                        <Form.Item
                            name="repassword"
                            rules={[
                                { required: true, message: '请再次输入密码' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve()
                                        }
                                        return Promise.reject('两次密码不一致')
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="请输入你的密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                        <Link to="/login">登录账户</Link>
                    </Form>
                </div>
            </Row>
        </>
    )
}

export default Page;
