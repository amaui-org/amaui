import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledRoundedFilled'
      short_name='AirlineSeatFlatAngled'

      {...props}
    >
      <path d="M9.025 12.725 10.75 8.025Q11.025 7.25 11.775 6.9Q12.525 6.55 13.3 6.825L19.875 9.225Q21.45 9.8 22.15 11.287Q22.85 12.775 22.275 14.35L21.25 17.175ZM19.275 19.65 2.35 13.5Q1.95 13.375 1.788 13Q1.625 12.625 1.75 12.225Q1.875 11.825 2.263 11.65Q2.65 11.475 3.05 11.625L19.975 17.775Q20.375 17.9 20.538 18.275Q20.7 18.65 20.575 19.05Q20.45 19.45 20.062 19.625Q19.675 19.8 19.275 19.65ZM6.325 11.55Q5.075 11.55 4.2 10.675Q3.325 9.8 3.325 8.55Q3.325 7.3 4.2 6.425Q5.075 5.55 6.325 5.55Q7.575 5.55 8.45 6.425Q9.325 7.3 9.325 8.55Q9.325 9.8 8.45 10.675Q7.575 11.55 6.325 11.55Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledRoundedFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledRoundedFilled';

export default IconMaterialAirlineSeatFlatAngledRoundedFilled;
