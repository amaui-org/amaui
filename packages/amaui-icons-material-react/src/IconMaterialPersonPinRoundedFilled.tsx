import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinRoundedFilled'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 22.575Q11.8 22.575 11.625 22.512Q11.45 22.45 11.3 22.3L9 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V4Q3 3.175 3.587 2.587Q4.175 2 5 2H19Q19.825 2 20.413 2.587Q21 3.175 21 4V18Q21 18.825 20.413 19.413Q19.825 20 19 20H15L12.7 22.3Q12.55 22.45 12.375 22.512Q12.2 22.575 12 22.575ZM12 12Q13.45 12 14.475 10.975Q15.5 9.95 15.5 8.5Q15.5 7.05 14.475 6.025Q13.45 5 12 5Q10.55 5 9.525 6.025Q8.5 7.05 8.5 8.5Q8.5 9.95 9.525 10.975Q10.55 12 12 12ZM12 20.2 14.2 18H19Q19 17.65 19 17.425Q19 17.2 19 16.85Q17.65 15.525 15.863 14.762Q14.075 14 12 14Q9.925 14 8.138 14.762Q6.35 15.525 5 16.85Q5 17.2 5 17.425Q5 17.65 5 18H9.8Z"/>
    </Icon>
  );
});

IconMaterialPersonPinRoundedFilled.displayName = 'AmauiIconMaterialPersonPinRoundedFilled';

export default IconMaterialPersonPinRoundedFilled;
