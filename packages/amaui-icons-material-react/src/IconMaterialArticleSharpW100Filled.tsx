import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleSharpW100Filled'
      short_name='Article'

      {...props}
    >
      <path d="M7.65 16.35H13.35V15.65H7.65ZM7.65 12.35H16.35V11.65H7.65ZM7.65 8.35H16.35V7.65H7.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialArticleSharpW100Filled;
