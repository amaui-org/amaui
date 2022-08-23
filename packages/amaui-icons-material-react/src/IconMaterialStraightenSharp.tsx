import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharp'
      short_name='Straighten'

      {...props}
    >
      <path d="M2 18V6H22V18ZM4 16H20V8H17V12H15V8H13V12H11V8H9V12H7V8H4ZM7 12H9ZM11 12H13ZM15 12H17ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenSharp.displayName = 'AmauiIconMaterialStraightenSharp';

export default IconMaterialStraightenSharp;
