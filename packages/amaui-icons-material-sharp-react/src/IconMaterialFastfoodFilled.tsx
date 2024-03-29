import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodFilled'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm17 8v-8q0-2.875-1.762-4.887Q14.475 8.1 11.275 7.3L11 5h5V1h2v4h5l-1.8 18ZM1 19v-2h15v2Zm0 4v-2h15v2Z"/>
    </Icon>
  );
});

IconMaterialFastfoodFilled.displayName = 'AmauiIconMaterialFastfoodFilled';

export default IconMaterialFastfoodFilled;
