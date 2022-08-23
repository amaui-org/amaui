import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTouchAppRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppRoundedFilled'
      short_name='TouchApp'

      {...props}
    >
      <path d="M9 9.25Q8.15 8.675 7.575 7.687Q7 6.7 7 5.5Q7 3.625 8.312 2.312Q9.625 1 11.5 1Q13.375 1 14.688 2.312Q16 3.625 16 5.5Q16 6.75 15.413 7.712Q14.825 8.675 14 9.25V5.5Q14 4.45 13.275 3.725Q12.55 3 11.5 3Q10.45 3 9.725 3.725Q9 4.45 9 5.5ZM10.95 22Q10.525 22 10.188 21.85Q9.85 21.7 9.55 21.4L5.575 17.425Q5.3 17.15 5.25 16.75Q5.2 16.35 5.4 16Q5.6 15.7 5.913 15.575Q6.225 15.45 6.5 15.5L10 16.25V5.5Q10 4.875 10.438 4.438Q10.875 4 11.5 4Q12.125 4 12.562 4.438Q13 4.875 13 5.5V11.5H13.6Q13.825 11.5 14.062 11.55Q14.3 11.6 14.5 11.7L18.9 13.75Q19.5 14.025 19.788 14.6Q20.075 15.175 19.975 15.825L19.35 20.275Q19.25 21 18.675 21.5Q18.1 22 17.375 22Z"/>
    </Icon>
  );
});

IconMaterialTouchAppRoundedFilled.displayName = 'AmauiIconMaterialTouchAppRoundedFilled';

export default IconMaterialTouchAppRoundedFilled;
