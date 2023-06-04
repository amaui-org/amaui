import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingFlatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatW100Filled'

      short_name='TrendingFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.75 12.35H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h15.75l-2.525-2.525q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.825 2.825q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.85 2.85q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatW100Filled.displayName = 'AmauiIconMaterialTrendingFlatW100Filled';

export default IconMaterialTrendingFlatW100Filled;
