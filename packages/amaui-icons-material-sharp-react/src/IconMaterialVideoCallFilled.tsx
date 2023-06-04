import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallFilled'

      short_name='VideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3Zm-7 4V4h16v6.5l4-4v11l-4-4V20Z"/>
    </Icon>
  );
});

IconMaterialVideoCallFilled.displayName = 'AmauiIconMaterialVideoCallFilled';

export default IconMaterialVideoCallFilled;
