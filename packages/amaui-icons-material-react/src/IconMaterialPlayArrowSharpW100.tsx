import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowSharpW100'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.3 16.65V7.35L16.6 12ZM10 12ZM10 15.35 15.3 12 10 8.65Z"/>
    </Icon>
  );
});

export default IconMaterialPlayArrowSharpW100;
