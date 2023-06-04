import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100Filled'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.95 17.7q-.625 0-1.062-.438-.438-.437-.438-1.062V7.8q0-.625.438-1.062Q5.325 6.3 5.95 6.3h8.4q.55 0 1.037.25.488.25.813.7l2.725 3.875q.275.4.275.875t-.275.875L16.2 16.7q-.35.45-.812.725-.463.275-1.038.275Z"/>
    </Icon>
  );
});

IconMaterialLabelW100Filled.displayName = 'AmauiIconMaterialLabelW100Filled';

export default IconMaterialLabelW100Filled;
