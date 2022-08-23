import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatTwoTone'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3l4-4z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatTwoTone.displayName = 'AmauiIconMaterialTrendingFlatTwoTone';

export default IconMaterialTrendingFlatTwoTone;
