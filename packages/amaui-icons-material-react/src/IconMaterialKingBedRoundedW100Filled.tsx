import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKingBedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedRoundedW100Filled'
      short_name='KingBed'

      {...props}
    >
      <path d="M3.3 15.7V12.8Q3.3 12.175 3.737 11.737Q4.175 11.3 4.8 11.3H5.3V9.1Q5.3 8.475 5.738 8.037Q6.175 7.6 6.8 7.6H17.2Q17.825 7.6 18.262 8.037Q18.7 8.475 18.7 9.1V11.3H19.2Q19.825 11.3 20.263 11.737Q20.7 12.175 20.7 12.8V15.7H20L19.725 17.525Q19.7 17.6 19.638 17.65Q19.575 17.7 19.5 17.7Q19.425 17.7 19.363 17.65Q19.3 17.6 19.275 17.525L19 15.7H5L4.725 17.525Q4.7 17.6 4.638 17.65Q4.575 17.7 4.5 17.7Q4.425 17.7 4.362 17.65Q4.3 17.6 4.275 17.525L4 15.7ZM12.35 11.3H18V9.1Q18 8.75 17.775 8.525Q17.55 8.3 17.2 8.3H12.35ZM6 11.3H11.65V8.3H6.8Q6.45 8.3 6.225 8.525Q6 8.75 6 9.1Z"/>
    </Icon>
  );
});

IconMaterialKingBedRoundedW100Filled.displayName = 'AmauiIconMaterialKingBedRoundedW100Filled';

export default IconMaterialKingBedRoundedW100Filled;
