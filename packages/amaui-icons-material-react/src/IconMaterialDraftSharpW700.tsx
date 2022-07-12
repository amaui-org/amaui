import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftSharpW700'
      short_name='Draft'

      {...props}
    >
      <path d="M3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM6.3 19.7H17.7V9.3H12.7V4.3H6.3ZM6.3 19.7V9.3V4.3Z"/>
    </Icon>
  )
});

export default IconMaterialDraftSharpW700;
