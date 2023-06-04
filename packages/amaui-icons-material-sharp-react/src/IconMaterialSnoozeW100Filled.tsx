import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnoozeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeW100Filled'

      short_name='Snooze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 15.6h4.2v-.7h-3.3l3.3-3.7v-.8H9.9v.7h3.35L9.9 14.85Zm2.1 5.1q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6ZM6 3.75l.5.5L3.25 7.5l-.5-.5Zm12 0L21.25 7l-.5.5-3.25-3.25Z"/>
    </Icon>
  );
});

IconMaterialSnoozeW100Filled.displayName = 'AmauiIconMaterialSnoozeW100Filled';

export default IconMaterialSnoozeW100Filled;
