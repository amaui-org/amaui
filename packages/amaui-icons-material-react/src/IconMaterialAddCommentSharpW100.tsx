import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentSharpW100'
      short_name='AddComment'

      {...props}
    >
      <path d="M11.65 13.35H12.35V10.35H15.35V9.65H12.35V6.65H11.65V9.65H8.65V10.35H11.65ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialAddCommentSharpW100.displayName = 'AmauiIconMaterialAddCommentSharpW100';

export default IconMaterialAddCommentSharpW100;
