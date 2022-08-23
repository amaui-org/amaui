import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDonutSmallSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallSharpFilled'
      short_name='DonutSmall'

      {...props}
    >
      <path d="M14.825 11Q14.6 10.35 14.138 9.863Q13.675 9.375 13.025 9.15V2.05Q16.6 2.4 19.113 4.912Q21.625 7.425 21.975 11ZM11.025 21.95Q7.175 21.575 4.6 18.725Q2.025 15.875 2.025 12Q2.025 8.125 4.6 5.275Q7.175 2.425 11.025 2.05V9.15Q10.125 9.475 9.575 10.262Q9.025 11.05 9.025 12Q9.025 12.95 9.575 13.712Q10.125 14.475 11.025 14.8ZM13.025 21.95V14.8Q13.675 14.575 14.138 14.112Q14.6 13.65 14.825 13H21.975Q21.625 16.575 19.113 19.087Q16.6 21.6 13.025 21.95Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallSharpFilled.displayName = 'AmauiIconMaterialDonutSmallSharpFilled';

export default IconMaterialDonutSmallSharpFilled;
