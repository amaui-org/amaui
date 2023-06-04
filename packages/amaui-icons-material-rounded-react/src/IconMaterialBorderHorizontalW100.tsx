import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderHorizontalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalW100'

      short_name='BorderHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 4.5v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm-16 4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm.5 4H4q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137h16q.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-16.5 4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm-16 4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontalW100.displayName = 'AmauiIconMaterialBorderHorizontalW100';

export default IconMaterialBorderHorizontalW100;
