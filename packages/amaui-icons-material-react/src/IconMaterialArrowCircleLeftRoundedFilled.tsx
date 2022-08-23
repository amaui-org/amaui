import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleLeftRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftRoundedFilled'
      short_name='ArrowCircleLeft'

      {...props}
    >
      <path d="M11.325 15.325Q11.6 15.6 12.013 15.587Q12.425 15.575 12.7 15.3Q12.975 15.025 12.975 14.6Q12.975 14.175 12.7 13.9L11.8 13H15.025Q15.45 13 15.725 12.712Q16 12.425 16 12Q16 11.575 15.713 11.287Q15.425 11 15 11H11.8L12.725 10.075Q13 9.8 12.988 9.387Q12.975 8.975 12.7 8.7Q12.425 8.425 12 8.425Q11.575 8.425 11.3 8.7L8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleLeftRoundedFilled.displayName = 'AmauiIconMaterialArrowCircleLeftRoundedFilled';

export default IconMaterialArrowCircleLeftRoundedFilled;
