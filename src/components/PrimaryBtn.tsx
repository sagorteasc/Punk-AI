import { cn } from '@/lib/utils'
import {
  Button,
  mantineHtmlProps,
  type ButtonProps,
  type ElementProps,
} from '@mantine/core'

interface PrimaryBtnProps
  extends ButtonProps, ElementProps<'button', keyof ButtonProps> {}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => (
  <Button
    bg="var(--mantine-color-button-primary)"
    className={cn(
      'hover:bg-primary-button/70! disabled:bg-primary-button/70! active:shadow-none! disabled:shadow-none!',
      className,
    )}
    {...mantineHtmlProps}
    onClick={onClick}
    {...rest}
    style={{
      boxShadow:
        '0px 0.5px 1px 0px #0000000D, 0px -4px 0px 0px #00000040 inset',
      ...(rest.style as React.CSSProperties),
    }}
  >
    {children}
  </Button>
)

export default PrimaryBtn
