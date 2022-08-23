import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodRoundedFilled'
      short_name='Aod'

      {...props}
    >
      <path d="M8.75 11.5Q8.425 11.5 8.213 11.287Q8 11.075 8 10.75Q8 10.425 8.213 10.212Q8.425 10 8.75 10H15.25Q15.575 10 15.788 10.212Q16 10.425 16 10.75Q16 11.075 15.788 11.287Q15.575 11.5 15.25 11.5ZM9.75 14.5Q9.425 14.5 9.213 14.287Q9 14.075 9 13.75Q9 13.425 9.213 13.212Q9.425 13 9.75 13H14.25Q14.575 13 14.788 13.212Q15 13.425 15 13.75Q15 14.075 14.788 14.287Q14.575 14.5 14.25 14.5ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialAodRoundedFilled.displayName = 'AmauiIconMaterialAodRoundedFilled';

export default IconMaterialAodRoundedFilled;
