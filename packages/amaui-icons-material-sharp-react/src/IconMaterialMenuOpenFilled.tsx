import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenFilled'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18v-2h13v2Zm16.6-1-5-5 5-5L21 8.4 17.4 12l3.6 3.6ZM3 13v-2h10v2Zm0-5V6h13v2Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenFilled.displayName = 'AmauiIconMaterialMenuOpenFilled';

export default IconMaterialMenuOpenFilled;
