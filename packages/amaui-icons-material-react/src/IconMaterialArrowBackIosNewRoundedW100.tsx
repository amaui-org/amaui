import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewRoundedW100'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <path d="M15.575 20.675 7.425 12.525Q7.3 12.4 7.25 12.275Q7.2 12.15 7.2 12Q7.2 11.85 7.25 11.725Q7.3 11.6 7.425 11.475L15.6 3.3Q15.775 3.125 16 3.125Q16.225 3.125 16.425 3.325Q16.6 3.5 16.6 3.75Q16.6 4 16.425 4.175L8.6 12L16.45 19.85Q16.625 20.025 16.625 20.25Q16.625 20.475 16.425 20.675Q16.25 20.85 16 20.85Q15.75 20.85 15.575 20.675Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewRoundedW100.displayName = 'AmauiIconMaterialArrowBackIosNewRoundedW100';

export default IconMaterialArrowBackIosNewRoundedW100;
