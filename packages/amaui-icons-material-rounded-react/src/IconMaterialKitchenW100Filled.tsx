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
      <path d="M5.3 9.5V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h10.4q.625 0 1.062.437.438.438.438 1.063v4.7ZM8.6 8q.15 0 .25-.1t.1-.25v-1.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.8q0 .15.1.25t.25.1Zm0 7.85q.15 0 .25-.1t.1-.25v-3.45q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.45q0 .15.1.25t.25.1ZM6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2v-9h13.4v9q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100Filled.displayName = 'AmauiIconMaterialKitchenW100Filled';

export default IconMaterialKitchenW100Filled;
