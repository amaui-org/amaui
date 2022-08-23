import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTramRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramRoundedFilled'
      short_name='Tram'

      {...props}
    >
      <path d="M7.425 22.975Q6.925 22.85 6.788 22.35Q6.65 21.85 7 21.5L7.5 21Q6.025 21 5.013 19.988Q4 18.975 4 17.5V8Q4 5.575 6.125 4.825Q8.25 4.075 11 4L11.75 2.5H7.75Q7.425 2.5 7.213 2.287Q7 2.075 7 1.75Q7 1.425 7.213 1.212Q7.425 1 7.75 1H16.25Q16.575 1 16.788 1.212Q17 1.425 17 1.75Q17 2.075 16.788 2.287Q16.575 2.5 16.25 2.5H13.75L13 4Q15.975 4.075 17.988 4.812Q20 5.55 20 8V17.5Q20 18.975 18.988 19.988Q17.975 21 16.5 21L17 21.5Q17.35 21.85 17.212 22.35Q17.075 22.85 16.575 22.975Q16.35 23.025 16.138 22.975Q15.925 22.925 15.75 22.75L14 21H10L8.25 22.75Q8.075 22.925 7.863 22.975Q7.65 23.025 7.425 22.975ZM12 18Q12.625 18 13.062 17.562Q13.5 17.125 13.5 16.5Q13.5 15.875 13.062 15.438Q12.625 15 12 15Q11.375 15 10.938 15.438Q10.5 15.875 10.5 16.5Q10.5 17.125 10.938 17.562Q11.375 18 12 18ZM6 12H18V9H6Z"/>
    </Icon>
  );
});

IconMaterialTramRoundedFilled.displayName = 'AmauiIconMaterialTramRoundedFilled';

export default IconMaterialTramRoundedFilled;
