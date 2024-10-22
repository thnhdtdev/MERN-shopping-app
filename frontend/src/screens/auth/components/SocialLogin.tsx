import { Button } from 'antd'
import React from 'react'

const SocialLogin = () => {
    return (
        <Button
            style={{ width: '100%' }}
            size='large'
            icon={
                <img width="24"
                    height="24"
                    src="https://img.icons8.com/fluency/48/google-logo.png"
                    alt="google-logo" />}>
            Sign up with Google
        </Button>
    )
}

export default SocialLogin