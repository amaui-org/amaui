import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartRoundedW100'
      short_name='BarChart'

      {...props}
    >
      <path d="M6.8 18.35Q6.55 18.35 6.375 18.175Q6.2 18 6.2 17.75V10.25Q6.2 10 6.375 9.825Q6.55 9.65 6.8 9.65Q7.05 9.65 7.225 9.825Q7.4 10 7.4 10.25V17.75Q7.4 18 7.225 18.175Q7.05 18.35 6.8 18.35ZM12 18.35Q11.75 18.35 11.575 18.175Q11.4 18 11.4 17.75V6.25Q11.4 6 11.575 5.825Q11.75 5.65 12 5.65Q12.25 5.65 12.425 5.825Q12.6 6 12.6 6.25V17.75Q12.6 18 12.425 18.175Q12.25 18.35 12 18.35ZM17.2 18.35Q16.95 18.35 16.775 18.175Q16.6 18 16.6 17.75V14.25Q16.6 14 16.775 13.825Q16.95 13.65 17.2 13.65Q17.45 13.65 17.625 13.825Q17.8 14 17.8 14.25V17.75Q17.8 18 17.625 18.175Q17.45 18.35 17.2 18.35Z"/>
    </Icon>
  );
});

IconMaterialBarChartRoundedW100.displayName = 'AmauiIconMaterialBarChartRoundedW100';

export default IconMaterialBarChartRoundedW100;
