import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100Filled'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100Filled.displayName = 'AmauiIconMaterialAddToQueueW100Filled';

export default IconMaterialAddToQueueW100Filled;
