import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterTwoTone'
      short_name='Carpenter'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5.71,5.62L7,4.33l8.49,8.49l-2.81,2.81L5.71,5.62z" opacity=".3"/><path d="M19.73,14.23L7,1.5L3.11,5.39l8.13,11.67c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24 C20.51,16.28,20.51,15.01,19.73,14.23z M5.71,5.62L7,4.33l8.49,8.49l-2.81,2.81L5.71,5.62z M14.07,19.88l-1.41-1.41l4.24-4.24 l1.41,1.41L14.07,19.88z"/>
    </Icon>
  );
});

IconMaterialCarpenterTwoTone.displayName = 'AmauiIconMaterialCarpenterTwoTone';

export default IconMaterialCarpenterTwoTone;
