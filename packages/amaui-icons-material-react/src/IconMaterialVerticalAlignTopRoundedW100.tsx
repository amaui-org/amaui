import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopRoundedW100'
      short_name='VerticalAlignTop'

      {...props}
    >
      <path d="M5 4.35Q4.85 4.35 4.75 4.25Q4.65 4.15 4.65 4Q4.65 3.85 4.75 3.75Q4.85 3.65 5 3.65H19Q19.15 3.65 19.25 3.75Q19.35 3.85 19.35 4Q19.35 4.15 19.25 4.25Q19.15 4.35 19 4.35ZM12 20.35Q11.85 20.35 11.75 20.25Q11.65 20.15 11.65 20V9.25L8.625 12.275Q8.525 12.375 8.4 12.375Q8.275 12.375 8.15 12.25Q8.025 12.125 8.025 12Q8.025 11.875 8.15 11.75L11.475 8.425Q11.6 8.3 11.725 8.25Q11.85 8.2 12 8.2Q12.15 8.2 12.275 8.25Q12.4 8.3 12.525 8.425L15.875 11.775Q15.975 11.875 15.975 12Q15.975 12.125 15.85 12.25Q15.725 12.375 15.6 12.375Q15.475 12.375 15.35 12.25L12.35 9.25V20Q12.35 20.15 12.25 20.25Q12.15 20.35 12 20.35Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopRoundedW100.displayName = 'AmauiIconMaterialVerticalAlignTopRoundedW100';

export default IconMaterialVerticalAlignTopRoundedW100;
