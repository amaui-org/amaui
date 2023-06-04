import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100Filled'

      short_name='VideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 15.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm-6.35 3.35V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100Filled.displayName = 'AmauiIconMaterialVideoCallW100Filled';

export default IconMaterialVideoCallW100Filled;
