import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutRoundedW100Filled'
      short_name='AllOut'

      {...props}
    >
      <path d="M5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19V17Q4.3 16.85 4.4 16.75Q4.5 16.65 4.65 16.65Q4.8 16.65 4.9 16.75Q5 16.85 5 17V19H7Q7.15 19 7.25 19.1Q7.35 19.2 7.35 19.35Q7.35 19.5 7.25 19.6Q7.15 19.7 7 19.7ZM17 19.7Q16.85 19.7 16.75 19.6Q16.65 19.5 16.65 19.35Q16.65 19.2 16.75 19.1Q16.85 19 17 19H19V17Q19 16.85 19.1 16.75Q19.2 16.65 19.35 16.65Q19.5 16.65 19.6 16.75Q19.7 16.85 19.7 17V19Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM12 17.7Q9.625 17.7 7.963 16.038Q6.3 14.375 6.3 12Q6.3 9.625 7.963 7.963Q9.625 6.3 12 6.3Q14.375 6.3 16.038 7.963Q17.7 9.625 17.7 12Q17.7 14.375 16.038 16.038Q14.375 17.7 12 17.7ZM4.65 7.35Q4.5 7.35 4.4 7.25Q4.3 7.15 4.3 7V5Q4.3 4.7 4.5 4.5Q4.7 4.3 5 4.3H7Q7.15 4.3 7.25 4.4Q7.35 4.5 7.35 4.65Q7.35 4.8 7.25 4.9Q7.15 5 7 5H5V7Q5 7.15 4.9 7.25Q4.8 7.35 4.65 7.35ZM19.35 7.35Q19.2 7.35 19.1 7.25Q19 7.15 19 7V5H17Q16.85 5 16.75 4.9Q16.65 4.8 16.65 4.65Q16.65 4.5 16.75 4.4Q16.85 4.3 17 4.3H19Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5V7Q19.7 7.15 19.6 7.25Q19.5 7.35 19.35 7.35Z"/>
    </Icon>
  );
});

IconMaterialAllOutRoundedW100Filled.displayName = 'AmauiIconMaterialAllOutRoundedW100Filled';

export default IconMaterialAllOutRoundedW100Filled;
