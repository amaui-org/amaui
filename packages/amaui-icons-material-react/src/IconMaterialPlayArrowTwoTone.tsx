import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowTwoTone'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/>
    </Icon>
  );
});

IconMaterialPlayArrowTwoTone.displayName = 'AmauiIconMaterialPlayArrowTwoTone';

export default IconMaterialPlayArrowTwoTone;
