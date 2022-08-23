import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSharpW100Filled'
      short_name='House'

      {...props}
    >
      <path d="M6.3 18.7V10.7H5.4L12 4.75L15.8 8.2V6H17V9.25L18.6 10.7H17.7V18.7H13.625V13.7H10.375V18.7ZM10.25 10H13.75Q13.75 9.325 13.225 8.887Q12.7 8.45 12 8.45Q11.3 8.45 10.775 8.887Q10.25 9.325 10.25 10Z"/>
    </Icon>
  );
});

IconMaterialHouseSharpW100Filled.displayName = 'AmauiIconMaterialHouseSharpW100Filled';

export default IconMaterialHouseSharpW100Filled;
