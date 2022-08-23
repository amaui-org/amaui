import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltSharpW100'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M12.7 12.55V18.7H11.3V12.55L5.6 5.3H18.425ZM12 12.3 16.95 6H7.05ZM12 12.3Z"/>
    </Icon>
  );
});

IconMaterialFilterAltSharpW100.displayName = 'AmauiIconMaterialFilterAltSharpW100';

export default IconMaterialFilterAltSharpW100;
