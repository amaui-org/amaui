import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleW100Filled'

      short_name='Article'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16.35h5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-4h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-4h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialArticleW100Filled.displayName = 'AmauiIconMaterialArticleW100Filled';

export default IconMaterialArticleW100Filled;
