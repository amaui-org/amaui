import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterBAndWRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWRoundedFilled'
      short_name='FilterBAndW'

      {...props}
    >
      <path d="M19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19Q5 19 5 19Q5 19 5 19H12V11L19 19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H12V11Z"/>
    </Icon>
  );
});

export default IconMaterialFilterBAndWRoundedFilled;
