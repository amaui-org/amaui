import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartToyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyW100'

      short_name='SmartToy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7v-6H3.6v-3.4h1.7v-4h5V4.6h3.4v1.7h5v4h1.7v3.4h-1.7v6ZM9 12.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm6 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-6.35 4h6.7v-.7h-6.7ZM6 19h12V7H6Zm0 0V7v12Z"/>
    </Icon>
  );
});

IconMaterialSmartToyW100.displayName = 'AmauiIconMaterialSmartToyW100';

export default IconMaterialSmartToyW100;
