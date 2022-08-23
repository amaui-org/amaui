import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotRoundedFilled'
      short_name='Whatshot'

      {...props}
    >
      <path d="M12 22Q9.5 22 7.488 20.938Q5.475 19.875 3.975 17.925L8.05 13.85L10.35 15.775Q10.65 16.025 11.038 16Q11.425 15.975 11.7 15.7L16 11.4V13Q16 13.425 16.288 13.712Q16.575 14 17 14Q17.425 14 17.712 13.712Q18 13.425 18 13V9Q18 8.575 17.712 8.287Q17.425 8 17 8H13Q12.575 8 12.288 8.287Q12 8.575 12 9Q12 9.425 12.288 9.712Q12.575 10 13 10H14.6L10.95 13.65L8.65 11.725Q8.35 11.475 7.963 11.5Q7.575 11.525 7.3 11.8L2.925 16.175Q2.425 15.025 2.163 13.712Q1.9 12.4 2.05 11Q2.425 7.2 5.25 4.6Q8.075 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialWhatshotRoundedFilled.displayName = 'AmauiIconMaterialWhatshotRoundedFilled';

export default IconMaterialWhatshotRoundedFilled;
