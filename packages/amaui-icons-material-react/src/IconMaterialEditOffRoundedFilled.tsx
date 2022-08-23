import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffRoundedFilled'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.1 21.875 12.725 15.525 7.55 20.7Q7.4 20.85 7.213 20.925Q7.025 21 6.825 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20V17.175Q3 16.975 3.075 16.788Q3.15 16.6 3.3 16.45L8.475 11.275L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.125 3.475Q2.4 3.2 2.825 3.2Q3.25 3.2 3.55 3.475L20.525 20.475Q20.8 20.75 20.8 21.175Q20.8 21.6 20.525 21.875Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.875ZM19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM15.575 12.675 11.325 8.425 13.6 6.15 17.85 10.4Z"/>
    </Icon>
  );
});

IconMaterialEditOffRoundedFilled.displayName = 'AmauiIconMaterialEditOffRoundedFilled';

export default IconMaterialEditOffRoundedFilled;
