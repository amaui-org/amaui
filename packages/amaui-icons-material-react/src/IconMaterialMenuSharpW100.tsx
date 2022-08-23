import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuSharpW100'
      short_name='Menu'

      {...props}
    >
      <path d="M3.65 17.05V16.35H20.35V17.05ZM3.65 12.35V11.65H20.35V12.35ZM3.65 7.65V6.95H20.35V7.65Z"/>
    </Icon>
  );
});

IconMaterialMenuSharpW100.displayName = 'AmauiIconMaterialMenuSharpW100';

export default IconMaterialMenuSharpW100;
