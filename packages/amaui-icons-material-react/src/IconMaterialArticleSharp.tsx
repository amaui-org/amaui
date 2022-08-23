import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleSharp'
      short_name='Article'

      {...props}
    >
      <path d="M7 17H14V15H7ZM7 13H17V11H7ZM7 9H17V7H7ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialArticleSharp.displayName = 'AmauiIconMaterialArticleSharp';

export default IconMaterialArticleSharp;
