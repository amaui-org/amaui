import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100'

      short_name='VideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 15.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm-6.35 3.35V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100.displayName = 'AmauiIconMaterialVideoCallW100';

export default IconMaterialVideoCallW100;
