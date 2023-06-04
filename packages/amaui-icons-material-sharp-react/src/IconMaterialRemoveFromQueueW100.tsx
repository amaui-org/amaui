import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueW100'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 11.35h6.7v-.7h-6.7Zm.65 8.35v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueW100.displayName = 'AmauiIconMaterialRemoveFromQueueW100';

export default IconMaterialRemoveFromQueueW100;
