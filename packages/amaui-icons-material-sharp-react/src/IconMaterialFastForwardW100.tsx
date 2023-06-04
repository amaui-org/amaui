import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardW100'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.575 16.2V7.8l6.3 4.2Zm8.55 0V7.8l6.3 4.2ZM5.275 12Zm8.55 0Zm-8.55 2.9 4.35-2.9-4.35-2.9Zm8.55 0 4.35-2.9-4.35-2.9Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100.displayName = 'AmauiIconMaterialFastForwardW100';

export default IconMaterialFastForwardW100;
