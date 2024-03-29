import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltFilled'

      short_name='ViewCompactAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11.5h3q.2 0 .35-.15.15-.15.15-.35V8q0-.2-.15-.35-.15-.15-.35-.15H8q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm5 0h3q.2 0 .35-.15.15-.15.15-.35V8q0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm-5 5h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35-.15-.15-.35-.15H8q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm5 0h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltFilled.displayName = 'AmauiIconMaterialViewCompactAltFilled';

export default IconMaterialViewCompactAltFilled;
