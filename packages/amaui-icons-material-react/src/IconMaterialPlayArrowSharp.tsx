import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowSharp'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M8 19V5L19 12ZM10 12ZM10 15.35 15.25 12 10 8.65Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowSharp.displayName = 'AmauiIconMaterialPlayArrowSharp';

export default IconMaterialPlayArrowSharp;
