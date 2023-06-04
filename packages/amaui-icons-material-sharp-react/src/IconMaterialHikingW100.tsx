import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHikingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingW100'

      short_name='Hiking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 5.1q-.65 0-1.125-.475T11.4 3.5q0-.65.475-1.125T13 1.9q.65 0 1.125.475T14.6 3.5q0 .65-.475 1.125T13 5.1ZM7.3 22.35l2.9-15.025q.075-.425.425-.675.35-.25.725-.25.4 0 .75.175t.55.525l1 1.6q.5.8 1.525 1.538 1.025.737 2.475 1.162v-2h.7v12.95h-.7V12.075q-1.35-.275-2.637-1.088-1.288-.812-2.388-2.162l-.925 4.65 2.15 2.05v6.825h-.7v-5.875l-3.25-2.4-1.825 8.275Zm-.125-10 1.1-5.575-1.825-.45L5.35 12Z"/>
    </Icon>
  );
});

IconMaterialHikingW100.displayName = 'AmauiIconMaterialHikingW100';

export default IconMaterialHikingW100;
