import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowSharpFilled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M8 19V5L19 12Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowSharpFilled.displayName = 'AmauiIconMaterialPlayArrowSharpFilled';

export default IconMaterialPlayArrowSharpFilled;
