import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdUnits = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnits'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 9q-.425 0-.712-.288Q8 8.425 8 8t.288-.713Q8.575 7 9 7h6q.425 0 .713.287Q16 7.575 16 8t-.287.712Q15.425 9 15 9ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAdUnits.displayName = 'AmauiIconMaterialAdUnits';

export default IconMaterialAdUnits;
