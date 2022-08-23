import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseRoundedW100'
      short_name='Pause'

      {...props}
    >
      <path d="M14.35 17.7Q14.075 17.7 13.863 17.487Q13.65 17.275 13.65 17V7Q13.65 6.725 13.863 6.512Q14.075 6.3 14.35 6.3H17Q17.275 6.3 17.488 6.512Q17.7 6.725 17.7 7V17Q17.7 17.275 17.488 17.487Q17.275 17.7 17 17.7ZM7 17.7Q6.725 17.7 6.513 17.487Q6.3 17.275 6.3 17V7Q6.3 6.725 6.513 6.512Q6.725 6.3 7 6.3H9.65Q9.925 6.3 10.138 6.512Q10.35 6.725 10.35 7V17Q10.35 17.275 10.138 17.487Q9.925 17.7 9.65 17.7ZM14.35 17H17V7H14.35ZM7 17H9.65V7H7ZM7 7V17ZM14.35 7V17Z"/>
    </Icon>
  );
});

IconMaterialPauseRoundedW100.displayName = 'AmauiIconMaterialPauseRoundedW100';

export default IconMaterialPauseRoundedW100;
