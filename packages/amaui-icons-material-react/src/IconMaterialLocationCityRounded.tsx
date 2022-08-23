import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationCityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityRounded'
      short_name='LocationCity'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V9Q3 8.175 3.587 7.587Q4.175 7 5 7H9V5.825Q9 5.625 9.038 5.438Q9.075 5.25 9.15 5.075Q9.225 4.9 9.325 4.737Q9.425 4.575 9.575 4.425L11.3 2.7Q11.6 2.4 12 2.4Q12.4 2.4 12.7 2.7L14.425 4.425Q14.7 4.7 14.85 5.062Q15 5.425 15 5.825V11H19Q19.825 11 20.413 11.587Q21 12.175 21 13V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H7V17H5ZM5 15H7V13H5ZM5 11H7V9H5ZM11 19H13V17H11ZM11 15H13V13H11ZM11 11H13V9H11ZM11 7H13V5H11ZM17 19H19V17H17ZM17 15H19V13H17Z"/>
    </Icon>
  );
});

IconMaterialLocationCityRounded.displayName = 'AmauiIconMaterialLocationCityRounded';

export default IconMaterialLocationCityRounded;
