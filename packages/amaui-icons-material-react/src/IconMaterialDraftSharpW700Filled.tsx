import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftSharpW700Filled'
      short_name='Draft'

      {...props}
    >
      <path d="M3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3H17.7L12.7 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialDraftSharpW700Filled;
