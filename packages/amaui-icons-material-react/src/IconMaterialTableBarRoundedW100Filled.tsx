import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarRoundedW100Filled'
      short_name='TableBar'

      {...props}
    >
      <path d="M8.9 15.725 7.8 18.5Q7.75 18.6 7.675 18.663Q7.6 18.725 7.475 18.725Q7.275 18.725 7.175 18.575Q7.075 18.425 7.15 18.25L8.25 15.5Q8.35 15.3 8.537 15.162Q8.725 15.025 8.95 15.025H11.65V9.975Q8.35 9.925 6.112 9.2Q3.875 8.475 3.875 7.5Q3.875 6.45 6.225 5.737Q8.575 5.025 12 5.025Q15.425 5.025 17.775 5.737Q20.125 6.45 20.125 7.5Q20.125 8.5 17.875 9.212Q15.625 9.925 12.35 9.975V15.025H15.05Q15.275 15.025 15.463 15.162Q15.65 15.3 15.75 15.5L16.85 18.25Q16.9 18.325 16.888 18.413Q16.875 18.5 16.825 18.575Q16.775 18.65 16.7 18.688Q16.625 18.725 16.525 18.725Q16.4 18.725 16.325 18.663Q16.25 18.6 16.2 18.5L15.1 15.725Z"/>
    </Icon>
  );
});

IconMaterialTableBarRoundedW100Filled.displayName = 'AmauiIconMaterialTableBarRoundedW100Filled';

export default IconMaterialTableBarRoundedW100Filled;
