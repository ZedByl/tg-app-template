import { Children } from 'app/types'

export interface WalletFinanceItemProps extends Children {
  icon: string
  title: string
  amount: number
  currency: string
  buttonProps: any
  buttonIcon: any
}
