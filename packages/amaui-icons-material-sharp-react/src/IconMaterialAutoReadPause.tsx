import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPause = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPause'

      short_name='AutoReadPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14h2V6H9Zm4 0h2V6h-2ZM2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPause.displayName = 'AmauiIconMaterialAutoReadPause';

export default IconMaterialAutoReadPause;
