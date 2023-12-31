import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectFilled'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 608-240h72l40 40v80H240v-80l40-40H80v-593h47v112l-99-99 56-56L876-84l-56 56Zm8-218L234-840h646v594h-52Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectFilled.displayName = 'AmauiIconMaterialMimoDisconnectFilled';

export default IconMaterialMimoDisconnectFilled;
