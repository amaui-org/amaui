import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleSharpW100'
      short_name='Article'

      {...props}
    >
      <path d="M7.65 16.35H13.35V15.65H7.65ZM7.65 12.35H16.35V11.65H7.65ZM7.65 8.35H16.35V7.65H7.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialArticleSharpW100.displayName = 'AmauiIconMaterialArticleSharpW100';

export default IconMaterialArticleSharpW100;
