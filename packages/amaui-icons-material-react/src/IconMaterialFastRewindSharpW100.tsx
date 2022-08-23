import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindSharpW100'
      short_name='FastRewind'

      {...props}
    >
      <path d="M19.425 16.2 13.125 12 19.425 7.8ZM10.875 16.2 4.575 12 10.875 7.8ZM10.175 12ZM18.725 12ZM10.175 14.9V9.1L5.825 12ZM18.725 14.9V9.1L14.375 12Z"/>
    </Icon>
  );
});

IconMaterialFastRewindSharpW100.displayName = 'AmauiIconMaterialFastRewindSharpW100';

export default IconMaterialFastRewindSharpW100;
