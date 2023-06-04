import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Kitchen'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 8q-.425 0-.712-.287Q8 7.425 8 7V6q0-.425.288-.713Q8.575 5 9 5t.713.287Q10 5.575 10 6v1q0 .425-.287.713Q9.425 8 9 8Zm0 9q-.425 0-.712-.288Q8 16.425 8 16v-3q0-.425.288-.713Q8.575 12 9 12t.713.287Q10 12.575 10 13v3q0 .425-.287.712Q9.425 17 9 17Zm-3 5q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12v-9H6v9ZM6 9h12V4H6Z"/>
    </Icon>
  );
});

IconMaterialKitchen.displayName = 'AmauiIconMaterialKitchen';

export default IconMaterialKitchen;
