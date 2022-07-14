import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowSharpW100Filled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.3 16.65V7.35L16.6 12Z"/>
    </Icon>
  );
});

export default IconMaterialPlayArrowSharpW100Filled;
