import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnarchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveW100'

      short_name='Unarchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1l1.6 1.95V19.7ZM5.4 7.3h13.2l-.85-1H6.25ZM5 19h14V8H5Zm6.65-2.75h.7V11.4l2.25 2.25.5-.5-3.1-3.1-3.1 3.1.5.5 2.25-2.25ZM5 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveW100.displayName = 'AmauiIconMaterialUnarchiveW100';

export default IconMaterialUnarchiveW100;
