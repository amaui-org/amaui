import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreRoundedFilled'
      short_name='UnfoldMore'

      {...props}
    >
      <path d="M8.225 8.325Q7.95 8.05 7.95 7.6Q7.95 7.15 8.225 6.875L11.3 3.8Q11.45 3.65 11.625 3.587Q11.8 3.525 12 3.525Q12.2 3.525 12.388 3.587Q12.575 3.65 12.7 3.8L15.8 6.9Q16.075 7.175 16.062 7.612Q16.05 8.05 15.775 8.325Q15.5 8.6 15.05 8.6Q14.6 8.6 14.325 8.325L12 6L9.65 8.35Q9.375 8.625 8.938 8.613Q8.5 8.6 8.225 8.325ZM12 20.575Q11.8 20.575 11.625 20.5Q11.45 20.425 11.3 20.3L8.225 17.225Q7.95 16.95 7.95 16.5Q7.95 16.05 8.225 15.775Q8.5 15.5 8.95 15.5Q9.4 15.5 9.675 15.775L12 18.1L14.35 15.75Q14.625 15.475 15.062 15.488Q15.5 15.5 15.775 15.775Q16.05 16.05 16.05 16.5Q16.05 16.95 15.775 17.225L12.7 20.3Q12.575 20.425 12.388 20.5Q12.2 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreRoundedFilled.displayName = 'AmauiIconMaterialUnfoldMoreRoundedFilled';

export default IconMaterialUnfoldMoreRoundedFilled;
