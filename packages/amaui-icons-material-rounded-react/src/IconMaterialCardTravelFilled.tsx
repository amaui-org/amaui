import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelFilled'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h3V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v2h3q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21Zm0-4h16v-3H4ZM9 6h6V4H9Z"/>
    </Icon>
  );
});

IconMaterialCardTravelFilled.displayName = 'AmauiIconMaterialCardTravelFilled';

export default IconMaterialCardTravelFilled;
