import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabUnselected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselected'

      short_name='TabUnselected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20v-2h2v2ZM8 6V4h2v2Zm6 4q-.825 0-1.412-.588Q12 8.825 12 8V4h8q.825 0 1.413.588Q22 5.175 22 6v4Zm4 10v-2h2v-2h2v2q0 .825-.587 1.413Q20.825 20 20 20Zm-8 0v-2h2v2Zm10-6v-2h2v2ZM2 16v-2h2v2Zm0-4v-2h2v2Zm2 8q-.825 0-1.412-.587Q2 18.825 2 18h2v2ZM2 8V6q0-.825.588-1.412Q3.175 4 4 4h2v2H4v2Zm4 12v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialTabUnselected.displayName = 'AmauiIconMaterialTabUnselected';

export default IconMaterialTabUnselected;
