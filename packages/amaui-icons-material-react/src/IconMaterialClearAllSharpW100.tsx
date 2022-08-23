import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllSharpW100'
      short_name='ClearAll'

      {...props}
    >
      <path d="M5.65 12.35V11.65H18.35V12.35ZM3.65 16.35V15.65H16.35V16.35ZM7.65 8.35V7.65H20.35V8.35Z"/>
    </Icon>
  );
});

IconMaterialClearAllSharpW100.displayName = 'AmauiIconMaterialClearAllSharpW100';

export default IconMaterialClearAllSharpW100;
