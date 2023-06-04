import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderInnerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerW100'

      short_name='BorderInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm8.5 0q-.2 0-.35-.15-.15-.15-.15-.35v-7.5H4q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137h7.5V4q0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363v7.5H20q.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15h-7.5V20q0 .2-.137.35-.138.15-.363.15Zm-8.5-4v-1h1v1Zm0-8v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-16v-1h1v1Zm8 16v-1h1v1Zm0-16v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-8v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerW100.displayName = 'AmauiIconMaterialBorderInnerW100';

export default IconMaterialBorderInnerW100;
