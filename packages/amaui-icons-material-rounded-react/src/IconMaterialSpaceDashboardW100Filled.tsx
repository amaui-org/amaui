import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100Filled'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.35q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm8.05-8.4q-.625 0-1.062-.438-.438-.437-.438-1.062v-4q0-.625.438-1.063.437-.437 1.062-.437h4.35q.625 0 1.063.437.437.438.437 1.063v4q0 .625-.437 1.062-.438.438-1.063.438Zm0 8.4q-.625 0-1.062-.438-.438-.437-.438-1.062v-4.7q0-.625.438-1.062Q13.225 12 13.85 12h4.35q.625 0 1.063.438.437.437.437 1.062v4.7q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100Filled.displayName = 'AmauiIconMaterialSpaceDashboardW100Filled';

export default IconMaterialSpaceDashboardW100Filled;
