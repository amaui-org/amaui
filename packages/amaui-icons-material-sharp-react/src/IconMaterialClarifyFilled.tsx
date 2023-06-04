import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClarifyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyFilled'

      short_name='Clarify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h7v-2H6Zm10 0h2V7h-2ZM6 13h7v-2H6Zm0-4h7V7H6ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h16V5H4v14Zm16 0H4V5h16v14Z"/>
    </Icon>
  );
});

IconMaterialClarifyFilled.displayName = 'AmauiIconMaterialClarifyFilled';

export default IconMaterialClarifyFilled;
