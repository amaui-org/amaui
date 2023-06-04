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
      <path d="M5.75 15.425q-.375.275-.775.05-.4-.225-.4-.675V9.2q0-.45.4-.675.4-.225.775.05l4.2 2.8q.35.225.35.625t-.35.625Zm8.55 0q-.375.275-.775.05-.4-.225-.4-.675V9.2q0-.45.4-.675.4-.225.775.05l4.2 2.8q.35.225.35.625t-.35.625ZM5.275 12Zm8.55 0Zm-8.55 2.9 4.35-2.9-4.35-2.9Zm8.55 0 4.35-2.9-4.35-2.9Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100.displayName = 'AmauiIconMaterialFastForwardW100';

export default IconMaterialFastForwardW100;
