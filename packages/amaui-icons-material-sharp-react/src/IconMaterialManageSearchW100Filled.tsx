import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchW100Filled'

      short_name='ManageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 18.05v-.7h9.2v.7Zm0-4.7v-.7h4.2v.7Zm0-4.7v-.7h4.2v.7ZM20 18.1l-3.8-3.8q-.5.4-1.1.625-.6.225-1.25.225-1.55 0-2.625-1.075T10.15 11.45q0-1.55 1.075-2.625T13.85 7.75q1.55 0 2.625 1.075t1.075 2.625q0 .65-.225 1.25t-.625 1.1l3.8 3.8Zm-6.15-3.65q1.25 0 2.125-.875t.875-2.125q0-1.25-.875-2.125T13.85 8.45q-1.25 0-2.125.875t-.875 2.125q0 1.25.875 2.125t2.125.875Z"/>
    </Icon>
  );
});

IconMaterialManageSearchW100Filled.displayName = 'AmauiIconMaterialManageSearchW100Filled';

export default IconMaterialManageSearchW100Filled;
