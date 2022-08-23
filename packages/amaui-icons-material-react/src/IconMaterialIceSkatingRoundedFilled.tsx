import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIceSkatingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingRoundedFilled'
      short_name='IceSkating'

      {...props}
    >
      <path d="M6 20V18H5Q4.175 18 3.587 17.413Q3 16.825 3 16V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9Q9.825 3 10.413 3.587Q11 4.175 11 5V6H8.5Q8.3 6 8.15 6.15Q8 6.3 8 6.5Q8 6.7 8.15 6.85Q8.3 7 8.5 7H11V7.5Q11 7.7 11.05 8H8.5Q8.3 8 8.15 8.15Q8 8.3 8 8.5Q8 8.7 8.15 8.85Q8.3 9 8.5 9H11.4Q11.75 9.575 12.288 9.975Q12.825 10.375 13.475 10.575L16.1 11.3Q17.4 11.65 18.2 12.712Q19 13.775 19 15.125V16Q19 16.825 18.413 17.413Q17.825 18 17 18H16V20H18Q19.025 20 19.825 19.387Q20.625 18.775 20.9 17.8Q21 17.45 21.238 17.225Q21.475 17 21.825 17Q22.325 17 22.65 17.363Q22.975 17.725 22.85 18.175Q22.45 19.875 21.088 20.938Q19.725 22 18 22H3Q2.575 22 2.288 21.712Q2 21.425 2 21Q2 20.575 2.288 20.288Q2.575 20 3 20ZM8 20H14V18H8Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingRoundedFilled.displayName = 'AmauiIconMaterialIceSkatingRoundedFilled';

export default IconMaterialIceSkatingRoundedFilled;
