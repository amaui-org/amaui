import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffRoundedFilled'
      short_name='LocationOff'

      {...props}
    >
      <path d="M18.2 15.325 13.775 10.9Q13.9 10.7 13.95 10.475Q14 10.25 14 10Q14 9.175 13.413 8.587Q12.825 8 12 8Q11.75 8 11.525 8.05Q11.3 8.1 11.1 8.225L6.775 3.9Q7.85 2.975 9.188 2.487Q10.525 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 11.4 19.55 12.662Q19.1 13.925 18.2 15.325ZM11.25 21.35Q7.6 18.125 5.8 15.375Q4 12.625 4 10.2Q4 9.4 4.125 8.675Q4.25 7.95 4.475 7.3L1.375 4.2Q1.1 3.925 1.1 3.5Q1.1 3.075 1.375 2.775Q1.675 2.5 2.1 2.5Q2.525 2.5 2.825 2.775L21.2 21.175Q21.475 21.45 21.475 21.875Q21.475 22.3 21.2 22.575Q20.9 22.875 20.475 22.875Q20.05 22.875 19.775 22.575L15.675 18.5Q15.025 19.2 14.3 19.913Q13.575 20.625 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Z"/>
    </Icon>
  );
});

IconMaterialLocationOffRoundedFilled.displayName = 'AmauiIconMaterialLocationOffRoundedFilled';

export default IconMaterialLocationOffRoundedFilled;
