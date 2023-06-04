import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardFilled'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.5 18V6l9 6Zm10 0V6l9 6Z"/>
    </Icon>
  );
});

IconMaterialFastForwardFilled.displayName = 'AmauiIconMaterialFastForwardFilled';

export default IconMaterialFastForwardFilled;
