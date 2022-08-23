import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterBAndWRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWRoundedW100'
      short_name='FilterBAndW'

      {...props}
    >
      <path d="M18.2 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.25 18.75Q5.325 18.825 5.463 18.913Q5.6 19 5.8 19H12V11L18.75 18.75Q18.825 18.675 18.913 18.538Q19 18.4 19 18.2V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H12V11Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWRoundedW100.displayName = 'AmauiIconMaterialFilterBAndWRoundedW100';

export default IconMaterialFilterBAndWRoundedW100;
