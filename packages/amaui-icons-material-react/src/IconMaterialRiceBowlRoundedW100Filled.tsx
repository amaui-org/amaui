import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRiceBowlRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlRoundedW100Filled'
      short_name='RiceBowl'

      {...props}
    >
      <path d="M9.3 20.7V19.375Q6.825 18.4 5.062 16.487Q3.3 14.575 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 14.575 18.938 16.487Q17.175 18.4 14.7 19.375V20.7ZM9.35 12H14.65V4.45Q14.025 4.225 13.363 4.112Q12.7 4 12 4Q11.3 4 10.638 4.112Q9.975 4.225 9.35 4.45ZM4 12H8.65V4.725Q6.575 5.675 5.287 7.625Q4 9.575 4 12ZM15.35 12H20Q20 9.575 18.712 7.625Q17.425 5.675 15.35 4.725Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlRoundedW100Filled.displayName = 'AmauiIconMaterialRiceBowlRoundedW100Filled';

export default IconMaterialRiceBowlRoundedW100Filled;
