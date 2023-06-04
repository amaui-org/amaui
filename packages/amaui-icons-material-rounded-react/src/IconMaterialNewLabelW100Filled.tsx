import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100Filled'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19.35q-.15 0-.25-.1t-.1-.25v-2.65H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.35V19q0 .15-.1.25t-.25.1Zm6.35-1.65v-3.55q0-.625-.437-1.063-.438-.437-1.063-.437h-1.5v-1.5q0-.625-.438-1.063-.437-.437-1.062-.437h-3.4V7.8q0-.625.438-1.062Q5.325 6.3 5.95 6.3h8.4q.55 0 1.037.25.488.25.813.7l2.725 3.875q.275.4.275.875t-.275.875L16.2 16.7q-.35.45-.812.725-.463.275-1.038.275Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100Filled.displayName = 'AmauiIconMaterialNewLabelW100Filled';

export default IconMaterialNewLabelW100Filled;
