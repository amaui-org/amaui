import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleRoundedFilled'
      short_name='CheckCircle'

      {...props}
    >
      <path d="M10.6 13.8 8.425 11.625Q8.15 11.35 7.75 11.35Q7.35 11.35 7.05 11.65Q6.775 11.925 6.775 12.35Q6.775 12.775 7.05 13.05L9.9 15.9Q10.175 16.175 10.6 16.175Q11.025 16.175 11.3 15.9L16.975 10.225Q17.25 9.95 17.25 9.55Q17.25 9.15 16.95 8.85Q16.675 8.575 16.25 8.575Q15.825 8.575 15.55 8.85ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleRoundedFilled.displayName = 'AmauiIconMaterialCheckCircleRoundedFilled';

export default IconMaterialCheckCircleRoundedFilled;
