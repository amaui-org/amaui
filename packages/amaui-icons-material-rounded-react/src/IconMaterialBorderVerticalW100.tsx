import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalW100'

      short_name='BorderVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4.5 16q-.2 0-.35-.15-.15-.15-.15-.35V4q0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363v16q0 .2-.137.35-.138.15-.363.15Zm3.5 0v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalW100.displayName = 'AmauiIconMaterialBorderVerticalW100';

export default IconMaterialBorderVerticalW100;
