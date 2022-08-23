import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassRoundedW100Filled'
      short_name='HotelClass'

      {...props}
    >
      <path d="M8.225 17.8Q8 17.975 7.763 17.812Q7.525 17.65 7.6 17.375L8.65 13.9L6.05 12.025Q5.8 11.85 5.888 11.575Q5.975 11.3 6.275 11.3H9.525L10.625 7.75Q10.675 7.6 10.775 7.525Q10.875 7.45 11 7.45Q11.125 7.45 11.225 7.525Q11.325 7.6 11.375 7.75L12.475 11.3H15.725Q16.025 11.3 16.113 11.575Q16.2 11.85 15.95 12.025L13.35 13.9L14.4 17.375Q14.475 17.65 14.238 17.812Q14 17.975 13.775 17.8L11 15.7ZM16.6 17.8 16.625 17.825 15.675 14.675 18.175 12.875H18.125Q17.525 12.875 18.038 13.175Q18.55 13.475 18.375 13.6L16.5 14.95L17.225 17.375Q17.275 17.575 16.7 17.512Q16.125 17.45 16.6 17.8ZM13.95 9.3 13.625 8.25 13.775 7.775Q13.825 7.625 13.925 7.55Q14.025 7.475 14.15 7.475Q14.275 7.475 14.375 7.55Q14.475 7.625 14.525 7.775L15 9.3Z"/>
    </Icon>
  );
});

IconMaterialHotelClassRoundedW100Filled.displayName = 'AmauiIconMaterialHotelClassRoundedW100Filled';

export default IconMaterialHotelClassRoundedW100Filled;
