import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownW100Filled'

      short_name='TrendingDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.875 17.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.2l-6.8-6.7L9.8 13.425q-.125.125-.25.175-.125.05-.275.05-.15 0-.287-.05-.138-.05-.238-.175L3 7.625q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l5.75 5.75 3.475-3.475q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l6.725 6.725V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownW100Filled.displayName = 'AmauiIconMaterialTrendingDownW100Filled';

export default IconMaterialTrendingDownW100Filled;
