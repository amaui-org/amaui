import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarSharpW100'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M5.3 13.7V9H6V13H18V9H18.7V13.7Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarSharpW100.displayName = 'AmauiIconMaterialSpaceBarSharpW100';

export default IconMaterialSpaceBarSharpW100;
