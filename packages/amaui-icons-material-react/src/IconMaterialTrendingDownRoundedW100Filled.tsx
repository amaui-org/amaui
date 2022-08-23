import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownRoundedW100Filled'
      short_name='TrendingDown'

      {...props}
    >
      <path d="M16.875 17.35Q16.725 17.35 16.625 17.25Q16.525 17.15 16.525 17Q16.525 16.85 16.625 16.75Q16.725 16.65 16.875 16.65H20.075L13.275 9.95L9.8 13.425Q9.675 13.55 9.55 13.6Q9.425 13.65 9.275 13.65Q9.125 13.65 8.988 13.6Q8.85 13.55 8.75 13.425L3 7.625Q2.9 7.525 2.9 7.4Q2.9 7.275 3.025 7.15Q3.15 7.025 3.275 7.025Q3.4 7.025 3.525 7.15L9.275 12.9L12.75 9.425Q12.875 9.3 13 9.25Q13.125 9.2 13.275 9.2Q13.425 9.2 13.55 9.25Q13.675 9.3 13.8 9.425L20.525 16.15V13Q20.525 12.85 20.625 12.75Q20.725 12.65 20.875 12.65Q21.025 12.65 21.125 12.75Q21.225 12.85 21.225 13V16.6Q21.225 16.925 21.013 17.138Q20.8 17.35 20.475 17.35Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownRoundedW100Filled.displayName = 'AmauiIconMaterialTrendingDownRoundedW100Filled';

export default IconMaterialTrendingDownRoundedW100Filled;
