import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlay'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 14 6-4-6-4Zm-8 8V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlay.displayName = 'AmauiIconMaterialAutoReadPlay';

export default IconMaterialAutoReadPlay;
