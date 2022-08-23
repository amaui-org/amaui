import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumSharpFilled'
      short_name='Forum'

      {...props}
    >
      <path d="M2 17V2H17V13H6ZM6 18V15H19V6H22V22L18 18Z"/>
    </Icon>
  );
});

IconMaterialForumSharpFilled.displayName = 'AmauiIconMaterialForumSharpFilled';

export default IconMaterialForumSharpFilled;
