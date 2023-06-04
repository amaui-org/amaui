import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueW100Filled'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 11.35h6.7v-.7h-6.7Zm.65 8.35v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueW100Filled.displayName = 'AmauiIconMaterialRemoveFromQueueW100Filled';

export default IconMaterialRemoveFromQueueW100Filled;
