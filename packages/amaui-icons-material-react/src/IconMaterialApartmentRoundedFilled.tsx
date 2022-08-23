import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApartmentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentRoundedFilled'
      short_name='Apartment'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V9Q3 8.175 3.587 7.587Q4.175 7 5 7H7V5Q7 4.175 7.588 3.587Q8.175 3 9 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V11H19Q19.825 11 20.413 11.587Q21 12.175 21 13V19Q21 19.825 20.413 20.413Q19.825 21 19 21H13V17H11V21ZM5 19H7V17H5ZM5 15H7V13H5ZM5 11H7V9H5ZM9 15H11V13H9ZM9 11H11V9H9ZM9 7H11V5H9ZM13 15H15V13H13ZM13 11H15V9H13ZM13 7H15V5H13ZM17 19H19V17H17ZM17 15H19V13H17Z"/>
    </Icon>
  );
});

IconMaterialApartmentRoundedFilled.displayName = 'AmauiIconMaterialApartmentRoundedFilled';

export default IconMaterialApartmentRoundedFilled;
