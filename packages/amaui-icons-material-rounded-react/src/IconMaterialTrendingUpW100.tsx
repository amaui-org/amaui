import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpW100'

      short_name='TrendingUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.025 17.1q-.125-.125-.112-.25.012-.125.112-.25l5.725-5.775q.1-.125.238-.175.137-.05.287-.05.15 0 .275.05.125.05.25.175l3.475 3.475 6.8-6.7h-3.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538v3.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V8.1L13.8 14.825q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L9.275 11.35 3.5 17.125q-.1.1-.225.1t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpW100.displayName = 'AmauiIconMaterialTrendingUpW100';

export default IconMaterialTrendingUpW100;
