import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumSharpW100Filled'
      short_name='Forum'

      {...props}
    >
      <path d="M3.8 15.1V3.3H16.8V12.3H6.6ZM6.6 15.7V14.3H17.975L18.8 15.125V6H20.2V18.5L17.4 15.7Z"/>
    </Icon>
  );
});

export default IconMaterialForumSharpW100Filled;
