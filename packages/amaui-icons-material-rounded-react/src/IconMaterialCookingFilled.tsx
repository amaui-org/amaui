import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingFilled'

      short_name='Cooking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-3H2v-2h7q.825 0 1.413.587Q11 17.175 11 18v3Zm4 0v-3q0-.825.588-1.413Q14.175 16 15 16h7v2h-7v3Zm-7-6q-1.25 0-2.125-.875T3 12V8h18v4q0 1.25-.875 2.125T18 15ZM3 7V5h6V4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4v1h6v2Z"/>
    </Icon>
  );
});

IconMaterialCookingFilled.displayName = 'AmauiIconMaterialCookingFilled';

export default IconMaterialCookingFilled;
