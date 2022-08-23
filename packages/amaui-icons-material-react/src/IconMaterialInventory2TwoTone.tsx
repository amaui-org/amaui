import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventory2TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2TwoTone'
      short_name='Inventory2'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon enable-background="new" opacity=".3" points="4,7 20,7 20,3.98 4,4"/><path d="M5,20h14V9H5V20z M9,12h6v2H9V12z" enable-background="new" opacity=".3"/><path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4l16-0.02V7z"/><rect height="2" width="6" x="9" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialInventory2TwoTone.displayName = 'AmauiIconMaterialInventory2TwoTone';

export default IconMaterialInventory2TwoTone;
