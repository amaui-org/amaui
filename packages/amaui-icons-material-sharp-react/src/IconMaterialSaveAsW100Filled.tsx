import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveAsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsW100Filled'

      short_name='SaveAs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h12.15l3.25 3.25v6.375L13.925 19.7Zm7.7-3.6q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7 9.7h6.95V7H7Zm8.35 11.9v-.5l4.7-4.7.5.5-4.7 4.7Zm5.8-5.3-.5-.5.95-.95.525.475Z"/>
    </Icon>
  );
});

IconMaterialSaveAsW100Filled.displayName = 'AmauiIconMaterialSaveAsW100Filled';

export default IconMaterialSaveAsW100Filled;
