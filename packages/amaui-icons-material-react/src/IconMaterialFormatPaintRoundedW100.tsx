import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatPaintRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintRoundedW100'
      short_name='FormatPaint'

      {...props}
    >
      <path d="M11 20.95Q10.7 20.95 10.5 20.75Q10.3 20.55 10.3 20.25V14.45H7Q6.35 14.45 5.925 14.025Q5.5 13.6 5.5 12.95V6.25Q5.5 5.35 6.15 4.7Q6.8 4.05 7.7 4.05H18.5V12.95Q18.5 13.6 18.075 14.025Q17.65 14.45 17 14.45H13.7V20.25Q13.7 20.55 13.5 20.75Q13.3 20.95 13 20.95ZM6.2 10.55H17.8V4.75H16.05V8.15Q16.05 8.3 15.95 8.4Q15.85 8.5 15.7 8.5Q15.55 8.5 15.45 8.4Q15.35 8.3 15.35 8.15V4.75H13.35V6.4Q13.35 6.55 13.25 6.65Q13.15 6.75 13 6.75Q12.85 6.75 12.75 6.65Q12.65 6.55 12.65 6.4V4.75H7.7Q7.05 4.75 6.625 5.175Q6.2 5.6 6.2 6.25ZM7 13.75H17Q17.35 13.75 17.575 13.525Q17.8 13.3 17.8 12.95V11.25H6.2V12.95Q6.2 13.3 6.425 13.525Q6.65 13.75 7 13.75ZM6.2 11.25V12.95Q6.2 13.3 6.2 13.525Q6.2 13.75 6.2 13.75Q6.2 13.75 6.2 13.525Q6.2 13.3 6.2 12.95Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintRoundedW100.displayName = 'AmauiIconMaterialFormatPaintRoundedW100';

export default IconMaterialFormatPaintRoundedW100;
