import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanFilled'

      short_name='SettingsOverscan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14v-4l-2 2Zm5 3 2-2h-4Zm-2-8h4l-2-2Zm7 5 2-2-2-2ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanFilled.displayName = 'AmauiIconMaterialSettingsOverscanFilled';

export default IconMaterialSettingsOverscanFilled;
