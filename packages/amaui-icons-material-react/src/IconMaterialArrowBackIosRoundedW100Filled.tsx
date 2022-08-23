import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosRoundedW100Filled'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M9.575 20.675 1.425 12.525Q1.3 12.4 1.25 12.275Q1.2 12.15 1.2 12Q1.2 11.85 1.25 11.725Q1.3 11.6 1.425 11.475L9.6 3.3Q9.775 3.125 10 3.125Q10.225 3.125 10.425 3.325Q10.6 3.5 10.6 3.75Q10.6 4 10.425 4.175L2.6 12L10.45 19.85Q10.625 20.025 10.625 20.25Q10.625 20.475 10.425 20.675Q10.25 20.85 10 20.85Q9.75 20.85 9.575 20.675Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosRoundedW100Filled.displayName = 'AmauiIconMaterialArrowBackIosRoundedW100Filled';

export default IconMaterialArrowBackIosRoundedW100Filled;
