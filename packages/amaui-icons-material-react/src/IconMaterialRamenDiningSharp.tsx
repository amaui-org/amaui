import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRamenDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningSharp'
      short_name='RamenDining'

      {...props}
    >
      <path d="M10 20H14V18.9L15.25 18.4Q16.875 17.75 18.013 16.587Q19.15 15.425 19.65 14H4.35Q4.85 15.425 5.975 16.587Q7.1 17.75 8.75 18.4L10 18.9ZM8 22V20.25Q5.325 19.2 3.663 17Q2 14.8 2 12H4V4L22 2V3.5L10.5 4.8V6.5H22V8H10.5V12H22Q22 14.8 20.337 17Q18.675 19.2 16 20.25V22ZM8 6.5H9V4.95L8 5.05ZM5.5 6.5H6.5V5.25L5.5 5.35ZM8 12H9V8H8ZM5.5 12H6.5V8H5.5ZM12 20Q12 20 12 20Q12 20 12 20Q12 20 12 20Q12 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningSharp.displayName = 'AmauiIconMaterialRamenDiningSharp';

export default IconMaterialRamenDiningSharp;
