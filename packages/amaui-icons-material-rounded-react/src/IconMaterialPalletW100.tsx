import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletW100'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.85 18.15v.575q0 .15-.112.263-.113.112-.263.112h-.65q-.15 0-.263-.112-.112-.113-.112-.263V18.2q0-.325.212-.537.213-.213.538-.213h13.6q.325 0 .537.213.213.212.213.537v.525q0 .15-.112.263-.113.112-.263.112h-.65q-.15 0-.262-.112-.113-.113-.113-.263v-.575H12.7v.575q0 .15-.112.263-.113.112-.263.112h-.65q-.15 0-.262-.112-.113-.113-.113-.263v-.575Zm1.225-2.7q-.325 0-.538-.212-.212-.213-.212-.538V4.8q0-.325.212-.538.213-.212.538-.212h9.85q.325 0 .537.212.213.213.213.538v9.7q0 .4-.262.675-.263.275-.638.275Zm-.05-.7h9.95v-10h-9.95ZM14.65 8.2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-5.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-7.625 6.55v-10 10Z"/>
    </Icon>
  );
});

IconMaterialPalletW100.displayName = 'AmauiIconMaterialPalletW100';

export default IconMaterialPalletW100;
