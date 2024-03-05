"use client"
import React from 'react';
import { Button as AntdButton } from 'antd';
import { useRouter } from 'next/navigation'
const Button = ({ title, className, loading, onClick, size, type, link, disabled, htmlType }) => {
  const router = useRouter();
  const handleClickButton = () => {
    if (link) router.push(link);
    else onClick?.();
  };
  return (
    <>
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        disabled={disabled}
        loading={loading}
        className={className}
      >
        {title && <span className="Button-title">{title}</span>}
      </AntdButton>
    </>
  )
}
export default Button
