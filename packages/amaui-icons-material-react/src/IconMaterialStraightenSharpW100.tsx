import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharpW100'
      short_name='Straighten'

      {...props}
    >
      <path d="M3.3 16.7V7.3H20.7V16.7ZM4 16H20V8H16.35V11H15.65V8H12.35V11H11.65V8H8.35V11H7.65V8H4ZM7.65 11H8.35ZM11.65 11H12.35ZM15.65 11H16.35ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenSharpW100.displayName = 'AmauiIconMaterialStraightenSharpW100';

export default IconMaterialStraightenSharpW100;
