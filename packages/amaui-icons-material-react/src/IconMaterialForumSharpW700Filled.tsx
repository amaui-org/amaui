import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumSharpW700Filled'
      short_name='Forum'

      {...props}
    >
      <path d="M0.575 17.525V0.475H17.275V13.15H4.975ZM5.55 19.3V15.15H19.275V5.475H23.425V23.525L19.2 19.3Z"/>
    </Icon>
  )
});

export default IconMaterialForumSharpW700Filled;
