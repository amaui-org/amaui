import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxFilled'

      short_name='Outbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14V9.85l-1.6 1.6L8 10l4-4 4 4-1.4 1.45-1.6-1.6V14Zm-8 7V3h18v18Zm9-5q.95 0 1.725-.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45Q11.05 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialOutboxFilled.displayName = 'AmauiIconMaterialOutboxFilled';

export default IconMaterialOutboxFilled;
