import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeInactive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactive'

      short_name='AirplanemodeInactive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 16-4.5-1.35-7-7V3.5q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062V9l8.5 5Zm-2.2 6.6-6.3-6.3V19l2 1.5V22L12 21l-3.5 1v-1.5l2-1.5v-5.5L2 16v-2l5.75-3.4L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactive.displayName = 'AmauiIconMaterialAirplanemodeInactive';

export default IconMaterialAirplanemodeInactive;
