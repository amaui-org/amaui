import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelRoundedW100Filled'
      short_name='CardTravel'

      {...props}
    >
      <path d="M4.8 19.7Q4.175 19.7 3.737 19.262Q3.3 18.825 3.3 18.2V8.8Q3.3 8.175 3.737 7.737Q4.175 7.3 4.8 7.3H8.3V5.8Q8.3 5.175 8.738 4.737Q9.175 4.3 9.8 4.3H14.2Q14.825 4.3 15.263 4.737Q15.7 5.175 15.7 5.8V7.3H19.2Q19.825 7.3 20.263 7.737Q20.7 8.175 20.7 8.8V18.2Q20.7 18.825 20.263 19.262Q19.825 19.7 19.2 19.7ZM4 16.45H20V14.55H4ZM9 7.3H15V5.8Q15 5.45 14.775 5.225Q14.55 5 14.2 5H9.8Q9.45 5 9.225 5.225Q9 5.45 9 5.8Z"/>
    </Icon>
  );
});

IconMaterialCardTravelRoundedW100Filled.displayName = 'AmauiIconMaterialCardTravelRoundedW100Filled';

export default IconMaterialCardTravelRoundedW100Filled;
