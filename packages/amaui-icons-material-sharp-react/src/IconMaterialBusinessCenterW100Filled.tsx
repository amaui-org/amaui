import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100Filled'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13.65V7.3h6V4.6h5.4v2.7h6v6.35h-7V12.3h-3.4v1.35ZM10 7.3h4v-2h-4Zm1 7.7v-2h2v2Zm-7.7 4.7v-5.35h7v1.35h3.4v-1.35h7v5.35Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100Filled.displayName = 'AmauiIconMaterialBusinessCenterW100Filled';

export default IconMaterialBusinessCenterW100Filled;
