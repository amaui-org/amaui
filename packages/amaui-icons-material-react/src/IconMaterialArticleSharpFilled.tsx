import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleSharpFilled'
      short_name='Article'

      {...props}
    >
      <path d="M7 17H14V15H7ZM7 13H17V11H7ZM7 9H17V7H7ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialArticleSharpFilled.displayName = 'AmauiIconMaterialArticleSharpFilled';

export default IconMaterialArticleSharpFilled;
