import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiningRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningRoundedW100Filled'
      short_name='Dining'

      {...props}
    >
      <path d="M4.8 20.7Q4.175 20.7 3.737 20.262Q3.3 19.825 3.3 19.2V4.8Q3.3 4.175 3.737 3.737Q4.175 3.3 4.8 3.3H19.2Q19.825 3.3 20.263 3.737Q20.7 4.175 20.7 4.8V19.2Q20.7 19.825 20.263 20.262Q19.825 20.7 19.2 20.7ZM8.75 18.6Q8.9 18.6 9 18.5Q9.1 18.4 9.1 18.25V12.2Q9.825 12.075 10.312 11.562Q10.8 11.05 10.8 10.3V6.75Q10.8 6.6 10.7 6.5Q10.6 6.4 10.45 6.4Q10.3 6.4 10.2 6.5Q10.1 6.6 10.1 6.75V10.15H9.1V6.75Q9.1 6.6 9 6.5Q8.9 6.4 8.75 6.4Q8.6 6.4 8.5 6.5Q8.4 6.6 8.4 6.75V10.15H7.4V6.75Q7.4 6.6 7.3 6.5Q7.2 6.4 7.05 6.4Q6.9 6.4 6.8 6.5Q6.7 6.6 6.7 6.75V10.3Q6.7 11.05 7.188 11.562Q7.675 12.075 8.4 12.2V18.25Q8.4 18.4 8.5 18.5Q8.6 18.6 8.75 18.6ZM14.75 18.6Q14.9 18.6 15 18.5Q15.1 18.4 15.1 18.25V12.4Q15.9 12.125 16.375 11.325Q16.85 10.525 16.85 9.4Q16.85 8.1 16.25 7.25Q15.65 6.4 14.75 6.4Q13.85 6.4 13.25 7.25Q12.65 8.1 12.65 9.4Q12.65 10.525 13.125 11.325Q13.6 12.125 14.4 12.4V18.25Q14.4 18.4 14.5 18.5Q14.6 18.6 14.75 18.6Z"/>
    </Icon>
  );
});

IconMaterialDiningRoundedW100Filled.displayName = 'AmauiIconMaterialDiningRoundedW100Filled';

export default IconMaterialDiningRoundedW100Filled;
