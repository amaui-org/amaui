import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeInactiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactiveW100'

      short_name='AirplanemodeInactive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.05 15.15 15.8 13.6l-4.95-4.95V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v5.85l8.5 5Zm-1 6.2-7.5-7.5V19l2 1.5v.7l-2.85-.9-2.85.85v-.65l2-1.45v-6.4l-8.5 2.5v-.8L9.1 10.4 2.65 3.95l.5-.5 17.4 17.4Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveW100.displayName = 'AmauiIconMaterialAirplanemodeInactiveW100';

export default IconMaterialAirplanemodeInactiveW100;
