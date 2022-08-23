import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreTimeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeSharpFilled'
      short_name='MoreTime'

      {...props}
    >
      <path d="M11 21Q9.125 21 7.488 20.3Q5.85 19.6 4.625 18.375Q3.4 17.15 2.7 15.512Q2 13.875 2 12Q2 10.125 2.7 8.487Q3.4 6.85 4.625 5.625Q5.85 4.4 7.488 3.7Q9.125 3 11 3Q11.525 3 12.012 3.062Q12.5 3.125 13 3.25V5.3Q12.5 5.15 12.012 5.075Q11.525 5 11 5Q8.05 5 6.025 7.025Q4 9.05 4 12Q4 14.95 6.025 16.975Q8.05 19 11 19Q13.95 19 15.975 16.975Q18 14.95 18 12Q18 11.725 17.975 11.5Q17.95 11.275 17.9 11H19.95Q20 11.275 20 11.5Q20 11.725 20 12Q20 13.875 19.3 15.512Q18.6 17.15 17.375 18.375Q16.15 19.6 14.513 20.3Q12.875 21 11 21ZM18 9V6H15V4H18V1H20V4H23V6H20V9ZM13.8 16.2 10 12.4V7H12V11.6L15.2 14.8Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeSharpFilled.displayName = 'AmauiIconMaterialMoreTimeSharpFilled';

export default IconMaterialMoreTimeSharpFilled;
