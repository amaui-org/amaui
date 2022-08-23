import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatSharp'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M17.5 16.5 16.075 15.1 18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatSharp.displayName = 'AmauiIconMaterialTrendingFlatSharp';

export default IconMaterialTrendingFlatSharp;
