import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarRentalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRentalSharpFilled'
      short_name='CarRental'

      {...props}
    >
      <path d="M8 7Q6.75 7 5.875 6.125Q5 5.25 5 4Q5 2.75 5.875 1.875Q6.75 1 8 1Q8.95 1 9.725 1.562Q10.5 2.125 10.85 3H19V5H18V7H16V5H10.85Q10.5 5.875 9.725 6.438Q8.95 7 8 7ZM8 5Q8.425 5 8.713 4.712Q9 4.425 9 4Q9 3.575 8.713 3.287Q8.425 3 8 3Q7.575 3 7.287 3.287Q7 3.575 7 4Q7 4.425 7.287 4.712Q7.575 5 8 5ZM9 17.5Q9.425 17.5 9.713 17.212Q10 16.925 10 16.5Q10 16.075 9.713 15.787Q9.425 15.5 9 15.5Q8.575 15.5 8.288 15.787Q8 16.075 8 16.5Q8 16.925 8.288 17.212Q8.575 17.5 9 17.5ZM15 17.5Q15.425 17.5 15.713 17.212Q16 16.925 16 16.5Q16 16.075 15.713 15.787Q15.425 15.5 15 15.5Q14.575 15.5 14.288 15.787Q14 16.075 14 16.5Q14 16.925 14.288 17.212Q14.575 17.5 15 17.5ZM5 22V14.6L6.925 9H17.075L19 14.6V22H17V20H7V22ZM7.65 13H16.35L15.65 11H8.35Z"/>
    </Icon>
  );
});

IconMaterialCarRentalSharpFilled.displayName = 'AmauiIconMaterialCarRentalSharpFilled';

export default IconMaterialCarRentalSharpFilled;
