import { FC, ReactElement } from 'react'
import classNames from 'classnames'

import { CommonStyles } from 'app/types'
import styles from './index.module.scss'

export const Skeleton: FC<CommonStyles> = ({ className = '', style }): ReactElement => {
  return (
    <div
      className={classNames(styles.root, className)}
      style={style}
    />
  )
}
