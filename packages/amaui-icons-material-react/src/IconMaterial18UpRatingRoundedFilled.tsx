import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial18UpRatingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingRoundedFilled'
      short_name='18UpRating'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM9.25 15Q9.575 15 9.788 14.787Q10 14.575 10 14.25V10Q10 9.575 9.713 9.287Q9.425 9 9 9H7.725Q7.425 9 7.213 9.212Q7 9.425 7 9.75Q7 10.075 7.213 10.287Q7.425 10.5 7.75 10.5H8.5V14.275Q8.5 14.575 8.713 14.787Q8.925 15 9.25 15ZM12.5 15H15Q15.425 15 15.713 14.712Q16 14.425 16 14V10Q16 9.575 15.713 9.287Q15.425 9 15 9H12.5Q12.075 9 11.788 9.287Q11.5 9.575 11.5 10V14Q11.5 14.425 11.788 14.712Q12.075 15 12.5 15ZM13 11.5V10H14.5V11.5ZM13 14V12.5H14.5V14Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingRoundedFilled.displayName = 'AmauiIconMaterial18UpRatingRoundedFilled';

export default IconMaterial18UpRatingRoundedFilled;
