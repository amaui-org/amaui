import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatRoundedW100Filled'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M19.75 12.35H4Q3.85 12.35 3.75 12.25Q3.65 12.15 3.65 12Q3.65 11.85 3.75 11.75Q3.85 11.65 4 11.65H19.75L17.225 9.125Q17.125 9.025 17.125 8.9Q17.125 8.775 17.25 8.65Q17.375 8.525 17.5 8.525Q17.625 8.525 17.75 8.65L20.575 11.475Q20.7 11.6 20.75 11.725Q20.8 11.85 20.8 12Q20.8 12.15 20.75 12.275Q20.7 12.4 20.575 12.525L17.725 15.375Q17.625 15.475 17.5 15.475Q17.375 15.475 17.25 15.35Q17.125 15.225 17.125 15.1Q17.125 14.975 17.25 14.85Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatRoundedW100Filled.displayName = 'AmauiIconMaterialTrendingFlatRoundedW100Filled';

export default IconMaterialTrendingFlatRoundedW100Filled;
