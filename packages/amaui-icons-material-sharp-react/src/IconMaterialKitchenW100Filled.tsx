import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100Filled'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 9.5V3.3h13.4v6.2ZM8.25 8h.7V5.5h-.7Zm0 7.85h.7V11.7h-.7ZM5.3 20.7V10.2h13.4v10.5Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100Filled.displayName = 'AmauiIconMaterialKitchenW100Filled';

export default IconMaterialKitchenW100Filled;
