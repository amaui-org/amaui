import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleSharpW700Filled'
      short_name='Article'

      {...props}
    >
      <path d="M7.15 16.85H14.15V14.85H7.15ZM7.15 13H16.85V11H7.15ZM7.15 9.15H16.85V7.15H7.15ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialArticleSharpW700Filled;
