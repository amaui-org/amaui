import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffRoundedFilled'
      short_name='PersonOff'

      {...props}
    >
      <path d="M5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V17.2Q4 16.35 4.438 15.637Q4.875 14.925 5.6 14.55Q6.725 13.975 7.888 13.625Q9.05 13.275 10.25 13.1Q10.25 13.1 10.25 13.1Q10.25 13.1 10.25 13.1L2.075 4.925Q1.775 4.625 1.788 4.225Q1.8 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.5 20.5Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9L17.15 20ZM20 17.15 16.65 13.8Q17.1 13.975 17.538 14.15Q17.975 14.325 18.4 14.55Q19.125 14.9 19.55 15.613Q19.975 16.325 20 17.15ZM14.2 11.35 8.65 5.8Q9.225 4.95 10.1 4.475Q10.975 4 12 4Q13.65 4 14.825 5.175Q16 6.35 16 8Q16 9.025 15.525 9.9Q15.05 10.775 14.2 11.35Z"/>
    </Icon>
  );
});

IconMaterialPersonOffRoundedFilled.displayName = 'AmauiIconMaterialPersonOffRoundedFilled';

export default IconMaterialPersonOffRoundedFilled;
