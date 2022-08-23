import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffRoundedW100Filled'
      short_name='DoNotDisturbOff'

      {...props}
    >
      <path d="M19.4 16.6 15.15 12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16.025 11.65H14.45L7.4 4.6Q8.425 3.975 9.575 3.637Q10.725 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.275 20.363 14.425Q20.025 15.575 19.4 16.6ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.375 3.85 8.95Q4.4 7.525 5.375 6.375L3.375 4.375Q3.275 4.275 3.288 4.137Q3.3 4 3.4 3.9Q3.525 3.775 3.65 3.775Q3.775 3.775 3.9 3.9L20.125 20.125Q20.225 20.225 20.213 20.363Q20.2 20.5 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6L17.625 18.625Q16.475 19.6 15.05 20.15Q13.625 20.7 12 20.7ZM11.35 12.35 10.65 11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 7.975 12.35Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffRoundedW100Filled.displayName = 'AmauiIconMaterialDoNotDisturbOffRoundedW100Filled';

export default IconMaterialDoNotDisturbOffRoundedW100Filled;
