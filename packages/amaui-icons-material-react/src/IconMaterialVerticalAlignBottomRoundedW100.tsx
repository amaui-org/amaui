import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomRoundedW100'
      short_name='VerticalAlignBottom'

      {...props}
    >
      <path d="M5 20.35Q4.85 20.35 4.75 20.25Q4.65 20.15 4.65 20Q4.65 19.85 4.75 19.75Q4.85 19.65 5 19.65H19Q19.15 19.65 19.25 19.75Q19.35 19.85 19.35 20Q19.35 20.15 19.25 20.25Q19.15 20.35 19 20.35ZM12 15.8Q11.85 15.8 11.725 15.75Q11.6 15.7 11.475 15.575L8.125 12.225Q8.025 12.125 8.025 12Q8.025 11.875 8.15 11.75Q8.275 11.625 8.4 11.625Q8.525 11.625 8.65 11.75L11.65 14.75V4Q11.65 3.85 11.75 3.75Q11.85 3.65 12 3.65Q12.15 3.65 12.25 3.75Q12.35 3.85 12.35 4V14.75L15.375 11.725Q15.475 11.625 15.6 11.625Q15.725 11.625 15.85 11.75Q15.975 11.875 15.975 12Q15.975 12.125 15.85 12.25L12.525 15.575Q12.4 15.7 12.275 15.75Q12.15 15.8 12 15.8Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomRoundedW100.displayName = 'AmauiIconMaterialVerticalAlignBottomRoundedW100';

export default IconMaterialVerticalAlignBottomRoundedW100;
