import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeRoundedW100Filled'
      short_name='PriceChange'

      {...props}
    >
      <path d="M7 15.35H8.65V16Q8.65 16.15 8.75 16.25Q8.85 16.35 9 16.35Q9.15 16.35 9.25 16.25Q9.35 16.15 9.35 16V15.35H10.65Q10.95 15.35 11.15 15.15Q11.35 14.95 11.35 14.65V12.35Q11.35 12.05 11.15 11.85Q10.95 11.65 10.65 11.65H7.35V9.35H11.025Q11.15 9.35 11.25 9.25Q11.35 9.15 11.35 9Q11.35 8.85 11.25 8.75Q11.15 8.65 11 8.65H9.35V8Q9.35 7.85 9.25 7.75Q9.15 7.65 9 7.65Q8.85 7.65 8.75 7.75Q8.65 7.85 8.65 8V8.65H7.35Q7.05 8.65 6.85 8.85Q6.65 9.05 6.65 9.35V11.65Q6.65 11.95 6.85 12.15Q7.05 12.35 7.35 12.35H10.65V14.65H6.975Q6.85 14.65 6.75 14.75Q6.65 14.85 6.65 15Q6.65 15.15 6.75 15.25Q6.85 15.35 7 15.35ZM15.725 15.625Q15.85 15.75 16 15.75Q16.15 15.75 16.275 15.625L17.4 14.5H14.6ZM14.6 9.75H17.4L16.275 8.625Q16.15 8.5 16 8.5Q15.85 8.5 15.725 8.625ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeRoundedW100Filled.displayName = 'AmauiIconMaterialPriceChangeRoundedW100Filled';

export default IconMaterialPriceChangeRoundedW100Filled;
