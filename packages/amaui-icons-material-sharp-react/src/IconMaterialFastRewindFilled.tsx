import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindFilled'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.5 18-9-6 9-6Zm-10 0-9-6 9-6Z"/>
    </Icon>
  );
});

IconMaterialFastRewindFilled.displayName = 'AmauiIconMaterialFastRewindFilled';

export default IconMaterialFastRewindFilled;
