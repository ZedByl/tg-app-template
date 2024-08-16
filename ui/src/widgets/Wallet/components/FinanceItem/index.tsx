import { FC, useState } from 'react'
import cn from 'classnames'

import { Button, Icon, Sheet, Text } from '@gravity-ui/uikit'
import { CardClub, Ellipsis } from '@gravity-ui/icons'

import { WalletFinanceItemProps } from '@widgets/Wallet/components/FinanceItem/types'
import styles from './index.module.scss'

export const FinanceItem: FC<WalletFinanceItemProps> = ({
  icon = CardClub,
  title,
  amount = 0,
  currency = 'Руб',
  buttonIcon = Ellipsis,
  buttonProps,
  children,
                            }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={cn(styles.item, styles.green)}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <Icon data={icon} />
        </div>

        {title && (<Text>{title}</Text>)}
      </div>

      <div className={styles.right}>
        <Text>{`${amount} ${currency || ''}`}</Text>

        <Button
          view="normal"
          size="l"
          {...buttonProps}
          onClick={() => setVisible(true)}
        >
          <Icon data={buttonIcon} />
        </Button>
      </div>

      <Sheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Мой новый кошелек"
      >
         {children}
      </Sheet>
    </div>
  )
}
