import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecyclingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingSharpFilled'
      short_name='Recycling'

      {...props}
    >
      <path d="M9.2 9.2 11.425 5.525 9.95 3.075Q9.65 2.575 9.088 2.575Q8.525 2.575 8.225 3.075L5.775 7.15ZM18.875 16 16.65 12.3 20.125 10.3 21.725 12.975Q22 13.4 22.013 13.938Q22.025 14.475 21.8 14.9Q21.55 15.4 21.062 15.7Q20.575 16 20 16ZM16 23 12 19 16 15V17H20.75L19.3 19.9Q19.025 20.4 18.55 20.7Q18.075 21 17.5 21H16ZM6.325 21Q5.825 21 5.412 20.738Q5 20.475 4.8 20.05Q4.6 19.65 4.613 19.212Q4.625 18.775 4.85 18.4L5.7 17H10V21ZM3.85 18.15 2.225 14.9Q2 14.45 2.013 13.938Q2.025 13.425 2.3 12.975L2.7 12.3L1 11.275L6.475 9.9L7.85 15.4L6.125 14.35ZM17.35 9.6 11.875 8.225 13.6 7.2 10.475 2H14Q14.525 2 14.988 2.262Q15.45 2.525 15.725 2.975L17.025 5.15L18.725 4.1Z"/>
    </Icon>
  );
});

IconMaterialRecyclingSharpFilled.displayName = 'AmauiIconMaterialRecyclingSharpFilled';

export default IconMaterialRecyclingSharpFilled;
