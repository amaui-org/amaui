import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100.displayName = 'AmauiIconMaterialAddToQueueW100';

export default IconMaterialAddToQueueW100;
