import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeUpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpRoundedFilled'
      short_name='VolumeUp'

      {...props}
    >
      <path d="M15.35 20.3Q14.85 20.5 14.425 20.175Q14 19.85 14 19.275Q14 19 14.163 18.788Q14.325 18.575 14.575 18.475Q16.575 17.675 17.788 15.925Q19 14.175 19 11.975Q19 9.775 17.788 8.025Q16.575 6.275 14.575 5.475Q14.3 5.375 14.15 5.15Q14 4.925 14 4.65Q14 4.1 14.425 3.775Q14.85 3.45 15.35 3.65Q17.9 4.675 19.45 6.925Q21 9.175 21 11.975Q21 14.775 19.45 17.025Q17.9 19.275 15.35 20.3ZM4 15Q3.575 15 3.288 14.712Q3 14.425 3 14V10Q3 9.575 3.288 9.287Q3.575 9 4 9H7L10.3 5.7Q10.775 5.225 11.387 5.487Q12 5.75 12 6.425V17.575Q12 18.25 11.387 18.512Q10.775 18.775 10.3 18.3L7 15ZM14 16V7.95Q15.125 8.475 15.812 9.575Q16.5 10.675 16.5 12Q16.5 13.325 15.812 14.4Q15.125 15.475 14 16Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpRoundedFilled.displayName = 'AmauiIconMaterialVolumeUpRoundedFilled';

export default IconMaterialVolumeUpRoundedFilled;
