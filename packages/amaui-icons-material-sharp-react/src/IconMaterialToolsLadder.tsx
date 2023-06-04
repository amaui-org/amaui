import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsLadder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadder'

      short_name='ToolsLadder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.7 21 5-18h2l-.85 3h5.625l.825-3h2l-5 18h-2l.85-3H7.525L6.7 21Zm4.775-10h5.6l.825-3h-5.6ZM8.1 16h5.6l.825-3h-5.6Z"/>
    </Icon>
  );
});

IconMaterialToolsLadder.displayName = 'AmauiIconMaterialToolsLadder';

export default IconMaterialToolsLadder;
