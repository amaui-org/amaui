import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApartmentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentSharpFilled'
      short_name='Apartment'

      {...props}
    >
      <path d="M3 21V7H7V3H17V11H21V21H13V17H11V21ZM5 19H7V17H5ZM5 15H7V13H5ZM5 11H7V9H5ZM9 15H11V13H9ZM9 11H11V9H9ZM9 7H11V5H9ZM13 15H15V13H13ZM13 11H15V9H13ZM13 7H15V5H13ZM17 19H19V17H17ZM17 15H19V13H17Z"/>
    </Icon>
  );
});

IconMaterialApartmentSharpFilled.displayName = 'AmauiIconMaterialApartmentSharpFilled';

export default IconMaterialApartmentSharpFilled;
