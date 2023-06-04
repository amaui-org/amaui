import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderHorizontalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalW100Filled'

      short_name='BorderHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm-16-4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm-16-4v-1h17v1Zm0-4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm-16-4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontalW100Filled.displayName = 'AmauiIconMaterialBorderHorizontalW100Filled';

export default IconMaterialBorderHorizontalW100Filled;
