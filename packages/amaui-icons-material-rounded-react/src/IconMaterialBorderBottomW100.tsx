import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomW100'

      short_name='BorderBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 4.5v-1h1v1Zm0 8v-1h1v1Zm4 0v-1h1v1Zm0-8v-1h1v1Zm-8 4v-1h1v1Zm0-4v-1h1v1Zm0 8v-1h1v1Zm0 4v-1h1v1Zm8-8v-1h1v1Zm8 8v-1h1v1Zm0-4v-1h1v1ZM4 20.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137h16q.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm15.5-12v-1h1v1Zm-4-4v-1h1v1Zm-4 12v-1h1v1Zm8-12v-1h1v1Zm-4 8v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomW100.displayName = 'AmauiIconMaterialBorderBottomW100';

export default IconMaterialBorderBottomW100;
