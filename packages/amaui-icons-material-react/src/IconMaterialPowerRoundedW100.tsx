import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerRoundedW100'
      short_name='Power'

      {...props}
    >
      <path d="M11.2 19H12.8V16.85L16 13.65V9.8Q16 9.5 15.75 9.25Q15.5 9 15.2 9H8.8Q8.5 9 8.25 9.25Q8 9.5 8 9.8V13.65L11.2 16.85ZM10.5 17.15 7.75 14.4Q7.55 14.2 7.425 13.912Q7.3 13.625 7.3 13.325V9.8Q7.3 9.15 7.725 8.725Q8.15 8.3 8.8 8.3H9.75V4.65Q9.75 4.5 9.85 4.4Q9.95 4.3 10.1 4.3Q10.25 4.3 10.35 4.4Q10.45 4.5 10.45 4.65V8.3H13.55V4.65Q13.55 4.5 13.65 4.4Q13.75 4.3 13.9 4.3Q14.05 4.3 14.15 4.4Q14.25 4.5 14.25 4.65V8.3H15.2Q15.85 8.3 16.275 8.725Q16.7 9.15 16.7 9.8V13.325Q16.7 13.625 16.575 13.912Q16.45 14.2 16.25 14.4L13.5 17.15V18.95Q13.5 19.275 13.288 19.487Q13.075 19.7 12.75 19.7H11.25Q10.925 19.7 10.713 19.487Q10.5 19.275 10.5 18.95ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPowerRoundedW100.displayName = 'AmauiIconMaterialPowerRoundedW100';

export default IconMaterialPowerRoundedW100;
