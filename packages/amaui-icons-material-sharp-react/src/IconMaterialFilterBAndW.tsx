import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterBAndW = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndW'

      short_name='FilterBAndW'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h7v-8l7 8V5h-7v6Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndW.displayName = 'AmauiIconMaterialFilterBAndW';

export default IconMaterialFilterBAndW;
