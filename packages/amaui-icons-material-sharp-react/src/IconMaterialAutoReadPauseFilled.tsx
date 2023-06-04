import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseFilled'

      short_name='AutoReadPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14h2V6H9Zm4 0h2V6h-2ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseFilled.displayName = 'AmauiIconMaterialAutoReadPauseFilled';

export default IconMaterialAutoReadPauseFilled;
