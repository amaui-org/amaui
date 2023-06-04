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
      <path d="M7.65 16.35h5.7v-.7h-5.7Zm0-4h8.7v-.7h-8.7Zm0-4h8.7v-.7h-8.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialArticleW100Filled.displayName = 'AmauiIconMaterialArticleW100Filled';

export default IconMaterialArticleW100Filled;
