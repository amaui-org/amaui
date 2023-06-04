import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 8V5.5h.7V8Zm0 7.85V11.7h.7v4.15ZM5.3 20.7V3.3h13.4v17.4ZM6 20h12v-9.8H6ZM6 9.5h12V4H6Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100.displayName = 'AmauiIconMaterialKitchenW100';

export default IconMaterialKitchenW100;
