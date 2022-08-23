import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToRegRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegRoundedFilled'
      short_name='HowToReg'

      {...props}
    >
      <path d="M15.55 19.975Q15.35 19.975 15.175 19.913Q15 19.85 14.85 19.7L12.8 17.65Q12.525 17.375 12.525 16.95Q12.525 16.525 12.8 16.25Q13.075 15.975 13.5 15.975Q13.925 15.975 14.2 16.25L15.55 17.6L19.9 13.25Q20.175 12.975 20.6 12.975Q21.025 12.975 21.3 13.25Q21.575 13.525 21.575 13.95Q21.575 14.375 21.3 14.65L16.25 19.7Q16.1 19.85 15.925 19.913Q15.75 19.975 15.55 19.975ZM10 12Q8.35 12 7.175 10.825Q6 9.65 6 8Q6 6.35 7.175 5.175Q8.35 4 10 4Q11.65 4 12.825 5.175Q14 6.35 14 8Q14 9.65 12.825 10.825Q11.65 12 10 12ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V17.2Q2 16.375 2.425 15.65Q2.85 14.925 3.6 14.55Q4.875 13.9 6.475 13.45Q8.075 13 10 13Q10.75 13 11.463 13.075Q12.175 13.15 12.85 13.3L10.6 15.55Q10.025 16.125 10.038 16.962Q10.05 17.8 10.625 18.375L12.25 20Z"/>
    </Icon>
  );
});

IconMaterialHowToRegRoundedFilled.displayName = 'AmauiIconMaterialHowToRegRoundedFilled';

export default IconMaterialHowToRegRoundedFilled;
