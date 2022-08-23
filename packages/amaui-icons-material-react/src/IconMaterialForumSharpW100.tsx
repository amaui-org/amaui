import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumSharpW100'
      short_name='Forum'

      {...props}
    >
      <path d="M3.8 15.1V3.3H16.8V12.3H6.6ZM6.6 15.7V14.3H17.975L18.8 15.125V6H20.2V18.5L17.4 15.7ZM16.1 4H4.5V13.4L6.3 11.6H16.1ZM4.5 4V11.6V13.4Z"/>
    </Icon>
  );
});

IconMaterialForumSharpW100.displayName = 'AmauiIconMaterialForumSharpW100';

export default IconMaterialForumSharpW100;
