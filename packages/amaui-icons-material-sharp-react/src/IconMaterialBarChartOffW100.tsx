import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChartOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartOffW100'

      short_name='BarChartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-346h108v346H212Zm214 0v-322l108 108v214H426Zm108-326L426-646v-102h108v210Zm214 214-54-54h54v54Zm46 198L126-794l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialBarChartOffW100.displayName = 'AmauiIconMaterialBarChartOffW100';

export default IconMaterialBarChartOffW100;
