import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkAlertW100Filled'

      short_name='WorkAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M710-170q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-72h28v-108h-28v108ZM400-668h160v-80H400v80Zm310 556q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-578-60v-496h240v-108h216v108h240v190q-27-14-56.848-22T710-508q-102.743 0-175.371 72.629Q462-362.743 462-260q0 22.576 4 44.788Q470-193 478-172H132Z"/>
    </Icon>
  );
});

IconMaterialWorkAlertW100Filled.displayName = 'AmauiIconMaterialWorkAlertW100Filled';

export default IconMaterialWorkAlertW100Filled;
