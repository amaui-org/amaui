import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToDriveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDriveW100'

      short_name='AddToDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.825 19.2v-2.4h-2.4v-1.6h2.4v-2.4h1.6v2.4h2.4v1.6h-2.4v2.4Zm-9.875.4q-.425 0-.8-.225-.375-.225-.575-.575L3.7 15.525q-.2-.35-.2-.8 0-.45.2-.8L8.775 5.2q.225-.4.588-.6.362-.2.787-.2h3.75q.425 0 .8.2.375.2.6.6l3.55 6.15q-.3-.1-.6-.125-.3-.025-.65-.025h-.337q-.138 0-.338.05L13.9 6h-3.75l-5.075 8.725L6.95 18h6.325q.2.45.5.85.3.4.7.75ZM8.2 16l-.575-1.025L11.3 8.6h1.45l2.025 3.525q-.35.275-.625.575-.275.3-.525.65l-1.6-2.8-2.2 3.85H13.1q-.15.4-.212.788-.063.387-.063.812Z"/>
    </Icon>
  );
});

IconMaterialAddToDriveW100.displayName = 'AmauiIconMaterialAddToDriveW100';

export default IconMaterialAddToDriveW100;
