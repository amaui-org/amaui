import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumSharp'
      short_name='Forum'

      {...props}
    >
      <path d="M2 17V2H17V13H6ZM6 18V15H19V6H22V22L18 18ZM15 4H4V12.175L5.175 11H15ZM4 4V11V12.175Z"/>
    </Icon>
  );
});

export default IconMaterialForumSharp;
