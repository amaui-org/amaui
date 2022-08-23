import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffRoundedFilled'
      short_name='DoNotDisturbOff'

      {...props}
    >
      <path d="M20.35 17.5 15.85 13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.725 11.287Q16.45 11 16.025 11H13.85L6.5 3.65Q7.725 2.85 9.113 2.425Q10.5 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.5 21.575 14.887Q21.15 16.275 20.35 17.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.5 2.425 9.112Q2.85 7.725 3.65 6.5L2.075 4.925Q1.775 4.625 1.788 4.212Q1.8 3.8 2.075 3.525Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.525L20.5 20.5Q20.8 20.8 20.788 21.212Q20.775 21.625 20.5 21.9Q20.2 22.2 19.775 22.2Q19.35 22.2 19.075 21.9L17.5 20.35Q16.275 21.15 14.888 21.575Q13.5 22 12 22ZM10.15 13 8.15 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.275 12.712Q7.55 13 7.975 13Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffRoundedFilled.displayName = 'AmauiIconMaterialDoNotDisturbOffRoundedFilled';

export default IconMaterialDoNotDisturbOffRoundedFilled;
