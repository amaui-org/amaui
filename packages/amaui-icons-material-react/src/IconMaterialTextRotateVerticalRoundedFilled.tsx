import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotateVerticalRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalRoundedFilled'
      short_name='TextRotateVertical'

      {...props}
    >
      <path d="M14.35 12.6H17.65L16.05 8.05H15.95ZM6 18.575Q5.8 18.575 5.625 18.512Q5.45 18.45 5.3 18.3L3.2 16.2Q2.925 15.925 2.925 15.5Q2.925 15.075 3.225 14.775Q3.5 14.5 3.9 14.5Q4.3 14.5 4.6 14.775L5 15.15V6Q5 5.575 5.287 5.287Q5.575 5 6 5Q6.425 5 6.713 5.287Q7 5.575 7 6V15.15L7.4 14.775Q7.7 14.5 8.1 14.5Q8.5 14.5 8.8 14.8Q9.075 15.075 9.075 15.5Q9.075 15.925 8.8 16.2L6.7 18.3Q6.55 18.45 6.375 18.512Q6.2 18.575 6 18.575ZM12.2 17Q11.65 17 11.4 16.637Q11.15 16.275 11.35 15.775L14.65 6.925Q14.8 6.55 15.188 6.275Q15.575 6 16 6Q16.425 6 16.812 6.275Q17.2 6.55 17.35 6.925L20.65 15.775Q20.85 16.275 20.588 16.637Q20.325 17 19.775 17Q19.525 17 19.3 16.837Q19.075 16.675 19 16.45L18.25 14.2H13.8L13 16.45Q12.925 16.675 12.7 16.837Q12.475 17 12.2 17Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalRoundedFilled.displayName = 'AmauiIconMaterialTextRotateVerticalRoundedFilled';

export default IconMaterialTextRotateVerticalRoundedFilled;
