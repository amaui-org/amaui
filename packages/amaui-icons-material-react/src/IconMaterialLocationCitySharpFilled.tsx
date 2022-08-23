import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationCitySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCitySharpFilled'
      short_name='LocationCity'

      {...props}
    >
      <path d="M3 21V7H9V5L12 2L15 5V11H21V21ZM5 19H7V17H5ZM5 15H7V13H5ZM5 11H7V9H5ZM11 19H13V17H11ZM11 15H13V13H11ZM11 11H13V9H11ZM11 7H13V5H11ZM17 19H19V17H17ZM17 15H19V13H17Z"/>
    </Icon>
  );
});

IconMaterialLocationCitySharpFilled.displayName = 'AmauiIconMaterialLocationCitySharpFilled';

export default IconMaterialLocationCitySharpFilled;
