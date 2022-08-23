import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltRoundedFilled'
      short_name='Bolt'

      {...props}
    >
      <path d="M10.675 21Q10.4 21 10.225 20.8Q10.05 20.6 10.1 20.325L11 14H7.5Q7.125 14 7.037 13.8Q6.95 13.6 7.15 13.25L12.85 3.275Q12.9 3.15 13.05 3.075Q13.2 3 13.325 3Q13.6 3 13.775 3.2Q13.95 3.4 13.9 3.675L13 10H16.5Q16.875 10 16.962 10.2Q17.05 10.4 16.85 10.75L11.15 20.725Q11.1 20.85 10.95 20.925Q10.8 21 10.675 21Z"/>
    </Icon>
  );
});

IconMaterialBoltRoundedFilled.displayName = 'AmauiIconMaterialBoltRoundedFilled';

export default IconMaterialBoltRoundedFilled;
