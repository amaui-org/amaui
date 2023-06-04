import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffFilled'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 19.15 5.85 3H22ZM2 19V3h1v2.8L.7 3.5l1.4-1.4 19.8 19.8-1.4 1.4-4.3-4.3H16v2H8v-2Z"/>
    </Icon>
  );
});

IconMaterialTvOffFilled.displayName = 'AmauiIconMaterialTvOffFilled';

export default IconMaterialTvOffFilled;
