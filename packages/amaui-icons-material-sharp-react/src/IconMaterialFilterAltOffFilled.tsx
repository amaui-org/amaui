import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffFilled'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.8 11.975 6.825 4H21.05ZM10 20v-7.175l-8.6-8.6L2.8 2.8l18.4 18.4-1.425 1.4L14 16.825V20Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffFilled.displayName = 'AmauiIconMaterialFilterAltOffFilled';

export default IconMaterialFilterAltOffFilled;
