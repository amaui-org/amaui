import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatOutlinedW700'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M17.125 17.7 14.875 15.475 16.775 13.575H2.425V10.425H16.775L14.875 8.525L17.125 6.3L22.8 12Z"/>
    </Icon>
  )
});

export default IconMaterialTrendingFlatOutlinedW700;
