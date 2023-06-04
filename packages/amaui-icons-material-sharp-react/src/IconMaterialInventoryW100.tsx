import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventoryW100'

      short_name='Inventory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7H4.3V4.3h6.275q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7V10H19V5h-3.3v2H8.3V5H5v14h6Zm4.5-.7-3.35-3.35.5-.5L15.5 18l5.7-5.7.5.5ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialInventoryW100.displayName = 'AmauiIconMaterialInventoryW100';

export default IconMaterialInventoryW100;
