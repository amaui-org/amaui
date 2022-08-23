import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextRoundedFilled'
      short_name='SkipNext'

      {...props}
    >
      <path d="M17.5 18Q17.075 18 16.788 17.712Q16.5 17.425 16.5 17V7Q16.5 6.575 16.788 6.287Q17.075 6 17.5 6Q17.925 6 18.212 6.287Q18.5 6.575 18.5 7V17Q18.5 17.425 18.212 17.712Q17.925 18 17.5 18ZM7.05 16.975Q6.55 17.325 6.025 17.025Q5.5 16.725 5.5 16.125V7.875Q5.5 7.275 6.025 6.987Q6.55 6.7 7.05 7.025L13.25 11.175Q13.7 11.475 13.7 12Q13.7 12.525 13.25 12.825Z"/>
    </Icon>
  );
});

IconMaterialSkipNextRoundedFilled.displayName = 'AmauiIconMaterialSkipNextRoundedFilled';

export default IconMaterialSkipNextRoundedFilled;
