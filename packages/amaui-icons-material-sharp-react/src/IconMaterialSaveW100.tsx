import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h12.15l3.25 3.25V19.7ZM5 19h14V7.85L16.15 5H5Zm7-2.9q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7 9.7h6.95V7H7ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialSaveW100.displayName = 'AmauiIconMaterialSaveW100';

export default IconMaterialSaveW100;
