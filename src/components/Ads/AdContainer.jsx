'use client'

import { useEffect, useState } from 'react'
import { DisplayAd, ResponsiveAd } from '.'

/**
 * 通用广告容器组件，可以在不同布局位置放置广告
 * @param {Object} props
 * @param {React.ReactNode} props.children - 需要被广告包围的内容
 * @param {string} props.position - 广告位置: 'sides'(两侧), 'top-bottom'(上下), 'right'(右侧), 'left'(左侧)
 * @param {string} props.leftSlot - 左侧或顶部广告的广告单元ID
 * @param {string} props.rightSlot - 右侧或底部广告的广告单元ID
 * @param {string} props.className - 容器的额外CSS类
 */
const AdContainer = ({ 
  children, 
  position = 'sides', 
  leftSlot = '3313300558',
  rightSlot = '7050033712',
  className = '' 
}) => {
  const [isMobile, setIsMobile] = useState(false)

  // 检测屏幕宽度
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024) // 1024px 为 lg 断点
    }
    
    // 初始检查
    checkScreenSize()
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkScreenSize)
    
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // 移动设备默认使用上下广告布局
  if (isMobile) {
    return (
      <div className={`space-y-4 ${className}`}>
        {/* 顶部广告 */}
        <div className="w-full flex justify-center">
          <DisplayAd 
            slot={leftSlot} 
            width={300}
            height={250}
            className="mx-auto"
          />
        </div>
        
        {/* 内容 */}
        {children}
        
        {/* 底部广告 */}
        <div className="w-full flex justify-center">
          <DisplayAd 
            slot={rightSlot} 
            width={300}
            height={250}
            className="mx-auto"
          />
        </div>
      </div>
    )
  }

  // 桌面设备根据position属性决定广告布局
  switch (position) {
    case 'sides': // 两侧广告
      return (
        <div className={`flex flex-row items-start ${className}`}>
          {/* 左侧广告 */}
          <div className="hidden lg:block lg:w-1/6 sticky top-20">
            <DisplayAd 
              slot={leftSlot} 
              width={160}
              height={600}
            />
          </div>
          
          {/* 中间内容 */}
          <div className="flex-grow lg:px-4">
            {children}
          </div>
          
          {/* 右侧广告 */}
          <div className="hidden lg:block lg:w-1/6 sticky top-20">
            <DisplayAd 
              slot={rightSlot} 
              width={160}
              height={600}
            />
          </div>
        </div>
      )
    
    case 'right': // 仅右侧广告
      return (
        <div className={`flex flex-row items-start ${className}`}>
          {/* 左侧内容 */}
          <div className="flex-grow lg:pr-4">
            {children}
          </div>
          
          {/* 右侧广告 */}
          <div className="hidden lg:block lg:w-1/6 sticky top-20">
            <DisplayAd 
              slot={rightSlot} 
              width={160}
              height={600}
            />
          </div>
        </div>
      )
    
    case 'left': // 仅左侧广告
      return (
        <div className={`flex flex-row items-start ${className}`}>
          {/* 左侧广告 */}
          <div className="hidden lg:block lg:w-1/6 sticky top-20">
            <DisplayAd 
              slot={leftSlot} 
              width={160}
              height={600}
            />
          </div>
          
          {/* 右侧内容 */}
          <div className="flex-grow lg:pl-4">
            {children}
          </div>
        </div>
      )
    
    case 'top-bottom': // 上下广告
      return (
        <div className={`space-y-4 ${className}`}>
          {/* 顶部广告 */}
          <div className="w-full">
            <ResponsiveAd 
              slot={leftSlot} 
              format="auto"
            />
          </div>
          
          {/* 内容 */}
          {children}
          
          {/* 底部广告 */}
          <div className="w-full">
            <ResponsiveAd 
              slot={rightSlot} 
              format="auto"
            />
          </div>
        </div>
      )
    
    default:
      return <>{children}</>
  }
}

export default AdContainer 