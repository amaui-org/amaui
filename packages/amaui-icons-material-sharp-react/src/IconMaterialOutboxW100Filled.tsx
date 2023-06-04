import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxW100Filled'

      short_name='Outbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.1V8.25L9.4 10.5l-.5-.5L12 6.9l3.1 3.1-.5.5-2.25-2.25v4.85ZM4.3 19.7V4.3h15.4v15.4Zm7.7-2.9q.95 0 1.725-.55.775-.55 1.075-1.45H19V5H5v9.8h4.2q.3.9 1.075 1.45.775.55 1.725.55Z"/>
    </Icon>
  );
});

IconMaterialOutboxW100Filled.displayName = 'AmauiIconMaterialOutboxW100Filled';

export default IconMaterialOutboxW100Filled;
