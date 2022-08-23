import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBakeryDiningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningRoundedFilled'
      short_name='BakeryDining'

      {...props}
    >
      <path d="M20.875 17.7 18.4 16.85 20.35 11.475 22.475 15.85Q22.825 16.525 22.175 17.225Q21.525 17.925 20.875 17.7ZM14.6 16.75 15.675 7.4Q15.725 7.025 16.013 6.887Q16.3 6.75 16.7 6.875L19.2 7.8Q19.55 7.95 19.663 8.25Q19.775 8.55 19.65 8.9L16.825 16.75ZM7.2 16.75 4.375 8.9Q4.25 8.55 4.363 8.238Q4.475 7.925 4.825 7.8L7.325 6.875Q7.675 6.725 7.988 6.862Q8.3 7 8.35 7.4L9.4 16.75ZM2.9 17.7Q2.25 17.9 1.725 17.212Q1.2 16.525 1.55 15.85L3.7 11.475L5.625 16.85ZM10.9 16.75 9.7 6Q9.65 5.575 9.938 5.287Q10.225 5 10.65 5H13.35Q13.775 5 14.062 5.287Q14.35 5.575 14.3 6L13.1 16.75Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningRoundedFilled.displayName = 'AmauiIconMaterialBakeryDiningRoundedFilled';

export default IconMaterialBakeryDiningRoundedFilled;
