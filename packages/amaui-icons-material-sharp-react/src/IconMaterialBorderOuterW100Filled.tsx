import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderOuterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterW100Filled'

      short_name='BorderOuter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-17h17v17Zm1-1h15v-15h-15Zm3-7v-1h1v1Zm4 4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterW100Filled.displayName = 'AmauiIconMaterialBorderOuterW100Filled';

export default IconMaterialBorderOuterW100Filled;
