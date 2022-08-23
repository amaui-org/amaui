import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingRoundedFilled'
      short_name='Moving'

      {...props}
    >
      <path d="M2.7 17.3Q2.425 17.025 2.425 16.6Q2.425 16.175 2.7 15.9L7.3 11.3Q8.175 10.425 9.425 10.425Q10.675 10.425 11.55 11.3L12.7 12.45Q13 12.75 13.413 12.75Q13.825 12.75 14.125 12.45L18.575 8H17Q16.575 8 16.288 7.713Q16 7.425 16 7Q16 6.575 16.288 6.287Q16.575 6 17 6H21Q21.425 6 21.712 6.287Q22 6.575 22 7V11Q22 11.425 21.712 11.712Q21.425 12 21 12Q20.575 12 20.288 11.712Q20 11.425 20 11V9.425L15.525 13.875Q14.65 14.75 13.4 14.75Q12.15 14.75 11.275 13.875L10.1 12.7Q9.825 12.425 9.4 12.425Q8.975 12.425 8.7 12.7L4.1 17.3Q3.825 17.575 3.4 17.575Q2.975 17.575 2.7 17.3Z"/>
    </Icon>
  );
});

IconMaterialMovingRoundedFilled.displayName = 'AmauiIconMaterialMovingRoundedFilled';

export default IconMaterialMovingRoundedFilled;
