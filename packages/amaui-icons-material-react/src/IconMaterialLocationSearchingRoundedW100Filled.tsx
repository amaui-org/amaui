import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationSearchingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingRoundedW100Filled'
      short_name='LocationSearching'

      {...props}
    >
      <path d="M12 21Q11.85 21 11.75 20.9Q11.65 20.8 11.65 20.65V19.7Q8.525 19.425 6.55 17.45Q4.575 15.475 4.3 12.35H3.35Q3.2 12.35 3.1 12.25Q3 12.15 3 12Q3 11.85 3.1 11.75Q3.2 11.65 3.35 11.65H4.3Q4.575 8.525 6.55 6.55Q8.525 4.575 11.65 4.3V3.35Q11.65 3.2 11.75 3.1Q11.85 3 12 3Q12.15 3 12.25 3.1Q12.35 3.2 12.35 3.35V4.3Q15.475 4.575 17.45 6.55Q19.425 8.525 19.7 11.65H20.65Q20.8 11.65 20.9 11.75Q21 11.85 21 12Q21 12.15 20.9 12.25Q20.8 12.35 20.65 12.35H19.7Q19.425 15.475 17.45 17.45Q15.475 19.425 12.35 19.7V20.65Q12.35 20.8 12.25 20.9Q12.15 21 12 21ZM12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.1 16.95 7.05Q14.9 5 12 5Q9.1 5 7.05 7.05Q5 9.1 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingRoundedW100Filled.displayName = 'AmauiIconMaterialLocationSearchingRoundedW100Filled';

export default IconMaterialLocationSearchingRoundedW100Filled;
