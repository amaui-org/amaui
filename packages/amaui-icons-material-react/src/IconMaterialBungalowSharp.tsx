import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowSharp'
      short_name='Bungalow'

      {...props}
    >
      <path d="M7 21V14.8L5.9 16.55L4.2 15.5L12 3L19.8 15.5L18.1 16.55L17 14.8V21ZM9 19H11V16H13V19H15V11.6L12 6.8L9 11.6ZM11 14V12H13V14ZM9 19H11H13H15H12H9Z"/>
    </Icon>
  );
});

IconMaterialBungalowSharp.displayName = 'AmauiIconMaterialBungalowSharp';

export default IconMaterialBungalowSharp;
