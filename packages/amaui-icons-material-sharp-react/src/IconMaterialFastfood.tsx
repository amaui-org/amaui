import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fastfood'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 15q0-1.5.65-2.625t1.7-1.875q1.05-.75 2.4-1.125Q7.1 9 8.5 9t2.75.375q1.35.375 2.4 1.125 1.05.75 1.7 1.875Q16 13.5 16 15Zm17 8v-2h1.4l1.4-14h-9.55L11 5h5V1h2v4h5l-1.8 18Zm0-2h1.4H18Zm-4.675-8q-.725-1-2.037-1.5Q9.975 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13ZM8.5 13ZM1 19v-2h15v2Zm0 4v-2h15v2Z"/>
    </Icon>
  );
});

IconMaterialFastfood.displayName = 'AmauiIconMaterialFastfood';

export default IconMaterialFastfood;
