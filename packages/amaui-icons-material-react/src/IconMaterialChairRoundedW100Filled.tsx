import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairRoundedW100Filled'
      short_name='Chair'

      {...props}
    >
      <path d="M5.7 13.45V10.8Q5.7 10.2 5.3 9.475Q4.9 8.75 4 8.75V7.6Q4 6.875 4.488 6.387Q4.975 5.9 5.7 5.9H18.3Q19.025 5.9 19.513 6.387Q20 6.875 20 7.6V8.75Q19.1 8.775 18.7 9.487Q18.3 10.2 18.3 10.8V13.45ZM5.05 18.85Q4.9 18.85 4.8 18.75Q4.7 18.65 4.7 18.5V17.5H4Q3.275 17.5 2.788 17.012Q2.3 16.525 2.3 15.8V10.8Q2.3 10.2 2.675 9.825Q3.05 9.45 3.65 9.45Q4.25 9.45 4.625 9.825Q5 10.2 5 10.8V14.15H19V10.8Q19 10.2 19.375 9.825Q19.75 9.45 20.35 9.45Q20.95 9.45 21.325 9.825Q21.7 10.2 21.7 10.8V15.8Q21.7 16.525 21.213 17.012Q20.725 17.5 20 17.5H19.3V18.5Q19.3 18.65 19.225 18.75Q19.15 18.85 19 18.85Q18.85 18.85 18.75 18.75Q18.65 18.65 18.65 18.5V17.5H5.4V18.5Q5.4 18.65 5.3 18.75Q5.2 18.85 5.05 18.85Z"/>
    </Icon>
  );
});

IconMaterialChairRoundedW100Filled.displayName = 'AmauiIconMaterialChairRoundedW100Filled';

export default IconMaterialChairRoundedW100Filled;
