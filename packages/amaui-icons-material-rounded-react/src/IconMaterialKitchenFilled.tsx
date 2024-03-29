import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenFilled'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9.5V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v5.5ZM9 8q.425 0 .713-.287Q10 7.425 10 7V6q0-.425-.287-.713Q9.425 5 9 5t-.712.287Q8 5.575 8 6v1q0 .425.288.713Q8.575 8 9 8Zm0 9q.425 0 .713-.288Q10 16.425 10 16v-3q0-.425-.287-.713Q9.425 12 9 12t-.712.287Q8 12.575 8 13v3q0 .425.288.712Q8.575 17 9 17Zm-3 5q-.825 0-1.412-.587Q4 20.825 4 20v-9.5h16V20q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialKitchenFilled.displayName = 'AmauiIconMaterialKitchenFilled';

export default IconMaterialKitchenFilled;
