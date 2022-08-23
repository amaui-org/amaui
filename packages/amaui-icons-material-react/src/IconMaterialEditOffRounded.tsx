import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffRounded'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.1 21.875 12.725 15.525 7.55 20.7Q7.4 20.85 7.213 20.925Q7.025 21 6.825 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20V17.175Q3 16.975 3.075 16.788Q3.15 16.6 3.3 16.45L8.475 11.275L2.1 4.9Q1.8 4.6 1.812 4.2Q1.825 3.8 2.125 3.5Q2.425 3.2 2.838 3.2Q3.25 3.2 3.55 3.5L20.525 20.475Q20.825 20.775 20.825 21.175Q20.825 21.575 20.525 21.875Q20.225 22.175 19.812 22.175Q19.4 22.175 19.1 21.875ZM10.6 13.4 9.9 12.7 10.6 13.4 11.3 14.1ZM15.575 12.675 14.15 11.25 15.025 10.375 13.625 8.975 12.75 9.85 11.325 8.425 13.6 6.15 17.85 10.4ZM19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM13.45 10.55ZM5 19H6.4L11.3 14.1L9.9 12.7L5 17.6Z"/>
    </Icon>
  );
});

IconMaterialEditOffRounded.displayName = 'AmauiIconMaterialEditOffRounded';

export default IconMaterialEditOffRounded;
