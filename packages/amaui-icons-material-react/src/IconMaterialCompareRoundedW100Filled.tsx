import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareRoundedW100Filled'
      short_name='Compare'

      {...props}
    >
      <path d="M11.65 22Q11.5 22 11.4 21.9Q11.3 21.8 11.3 21.65V19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H11.3V2.35Q11.3 2.2 11.4 2.1Q11.5 2 11.65 2Q11.8 2 11.9 2.1Q12 2.2 12 2.35V21.65Q12 21.8 11.9 21.9Q11.8 22 11.65 22ZM5 18H11.3V10.45ZM14 19.7V12L19 18V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H14V4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialCompareRoundedW100Filled.displayName = 'AmauiIconMaterialCompareRoundedW100Filled';

export default IconMaterialCompareRoundedW100Filled;
