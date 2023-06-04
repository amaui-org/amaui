import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventory2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2W100'

      short_name='Inventory2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V8.9q-.35-.075-.675-.475-.325-.4-.325-.925V6.1q0-.65.425-1.075Q4.15 4.6 4.8 4.6h14.4q.65 0 1.075.425.425.425.425 1.075v1.4q0 .525-.325.925T19.7 8.9v10.3q0 .65-.425 1.075-.425.425-1.075.425ZM5 9v10.2q0 .35.225.575Q5.45 20 5.8 20h12.4q.35 0 .575-.225Q19 19.55 19 19.2V9Zm14.2-.7q.35 0 .575-.225Q20 7.85 20 7.5V6.1q0-.35-.225-.575Q19.55 5.3 19.2 5.3H4.8q-.35 0-.575.225Q4 5.75 4 6.1v1.4q0 .35.225.575.225.225.575.225Zm-9.35 4.9h4.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5 20V9 20Z"/>
    </Icon>
  );
});

IconMaterialInventory2W100.displayName = 'AmauiIconMaterialInventory2W100';

export default IconMaterialInventory2W100;
