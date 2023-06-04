import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1Filled'

      short_name='ExposurePlus1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17v-3H3v-2h3V9h2v3h3v2H8v3Zm9.75 2V8.05l-2.3 1.65-1.15-1.75L16.4 5H18v14Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1Filled.displayName = 'AmauiIconMaterialExposurePlus1Filled';

export default IconMaterialExposurePlus1Filled;
