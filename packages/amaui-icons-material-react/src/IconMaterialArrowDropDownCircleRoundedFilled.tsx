import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownCircleRoundedFilled'
      short_name='ArrowDropDownCircle'

      {...props}
    >
      <path d="M11.65 14.65Q11.8 14.8 12 14.8Q12.2 14.8 12.35 14.65L15.15 11.85Q15.375 11.625 15.262 11.312Q15.15 11 14.8 11H9.2Q8.85 11 8.738 11.312Q8.625 11.625 8.85 11.85ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownCircleRoundedFilled.displayName = 'AmauiIconMaterialArrowDropDownCircleRoundedFilled';

export default IconMaterialArrowDropDownCircleRoundedFilled;
