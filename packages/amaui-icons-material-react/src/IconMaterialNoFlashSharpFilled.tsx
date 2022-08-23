import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFlashSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashSharpFilled'
      short_name='NoFlash'

      {...props}
    >
      <path d="M20.475 23.3 17.975 20.8V22H2V9.4H6.15L6.35 9.175L0.675 3.5L2.1 2.075L21.9 21.875ZM9.25 12.075Q9.25 12.075 9.25 12.075Q9.25 12.075 9.25 12.075Q7.825 12.375 6.912 13.45Q6 14.525 6 16Q6 17.65 7.175 18.825Q8.35 20 10 20Q11.475 20 12.575 19.075Q13.675 18.15 13.95 16.75Q13.925 16.8 13.938 16.775Q13.95 16.75 13.95 16.75ZM10 18Q9.175 18 8.588 17.413Q8 16.825 8 16Q8 15.175 8.588 14.587Q9.175 14 10 14Q10.825 14 11.413 14.587Q12 15.175 12 16Q12 16.825 11.413 17.413Q10.825 18 10 18ZM18 15.125 10.875 8H12.575L13.85 9.4H18ZM19 11V7H18V2H22L20.4 5.6H22Z"/>
    </Icon>
  );
});

IconMaterialNoFlashSharpFilled.displayName = 'AmauiIconMaterialNoFlashSharpFilled';

export default IconMaterialNoFlashSharpFilled;
