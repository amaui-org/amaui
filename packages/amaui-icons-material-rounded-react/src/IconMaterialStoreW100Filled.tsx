import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreW100Filled'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.9 5.35q-.15 0-.25-.1T4.55 5q0-.15.1-.25t.25-.1h14.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.5 14q-.325 0-.537-.212-.213-.213-.213-.538v-5.25h-.525q-.35 0-.587-.288-.238-.287-.138-.637l1-4.2q.05-.25.262-.413.213-.162.488-.162h13.7q.275 0 .487.162.213.163.263.413l1 4.2q.1.35-.137.637-.238.288-.588.288h-.525V19q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.65h-5.3v5.25q0 .325-.212.538-.213.212-.538.212Zm-.05-.7h7.3v-5.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialStoreW100Filled.displayName = 'AmauiIconMaterialStoreW100Filled';

export default IconMaterialStoreW100Filled;
