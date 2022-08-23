import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRoundedW100Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M10.975 19.9 4.125 13.05Q3.675 12.6 3.65 12Q3.625 11.4 4.075 10.95L10.925 4.1Q11.375 3.65 12 3.65Q12.625 3.65 13.075 4.1L19.925 10.95Q20.375 11.4 20.375 12Q20.375 12.6 19.925 13.05L13.075 19.9Q12.625 20.35 12.025 20.35Q11.425 20.35 10.975 19.9ZM11.75 15.85Q11.875 15.975 12 15.975Q12.125 15.975 12.25 15.85L15.575 12.525Q15.7 12.4 15.75 12.275Q15.8 12.15 15.8 12Q15.8 11.85 15.75 11.725Q15.7 11.6 15.575 11.475L12.25 8.15Q12.15 8.05 12.012 8.037Q11.875 8.025 11.75 8.15Q11.625 8.275 11.625 8.4Q11.625 8.525 11.75 8.65L14.75 11.65H8.25Q8.1 11.65 8 11.75Q7.9 11.85 7.9 12Q7.9 12.15 8 12.25Q8.1 12.35 8.25 12.35H14.75L11.75 15.35Q11.65 15.45 11.637 15.587Q11.625 15.725 11.75 15.85Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRoundedW100Filled.displayName = 'AmauiIconMaterialDirectionsRoundedW100Filled';

export default IconMaterialDirectionsRoundedW100Filled;
