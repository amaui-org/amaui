import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderInnerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerW100Filled'

      short_name='BorderInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm8 0v-8h-8v-1h8v-8h1v8h8v1h-8v8Zm-4 0v-1h1v1Zm8 0v-1h1v1Zm4 0v-1h1v1Zm-16-4v-1h1v1Zm16 0v-1h1v1Zm-16-8v-1h1v1Zm16 0v-1h1v1Zm-16-4v-1h1v1Zm4 0v-1h1v1Zm8 0v-1h1v1Zm4 0v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerW100Filled.displayName = 'AmauiIconMaterialBorderInnerW100Filled';

export default IconMaterialBorderInnerW100Filled;
