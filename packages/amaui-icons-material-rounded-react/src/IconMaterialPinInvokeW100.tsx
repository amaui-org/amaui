import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinInvokeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeW100'

      short_name='PinInvoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.875 16.1q-.125-.125-.125-.25t.125-.25l4.3-4.275H10.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.25q.325 0 .538.212.212.213.212.538v3.25q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.8L9.375 16.1q-.05.05-.112.075-.063.025-.125.025-.063 0-.138-.025-.075-.025-.125-.075Zm9.575-6.3q-.95 0-1.6-.65-.65-.65-.65-1.6 0-.95.65-1.6.65-.65 1.6-.65.95 0 1.6.65.65.65.65 1.6 0 .95-.65 1.6-.65.65-1.6.65ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h8.85V6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55v-4.85h.7v4.85q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeW100.displayName = 'AmauiIconMaterialPinInvokeW100';

export default IconMaterialPinInvokeW100;
