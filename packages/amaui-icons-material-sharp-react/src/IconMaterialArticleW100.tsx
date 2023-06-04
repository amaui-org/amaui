import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleW100'

      short_name='Article'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.35h5.7v-.7h-5.7Zm0-4h8.7v-.7h-8.7Zm0-4h8.7v-.7h-8.7ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialArticleW100.displayName = 'AmauiIconMaterialArticleW100';

export default IconMaterialArticleW100;
