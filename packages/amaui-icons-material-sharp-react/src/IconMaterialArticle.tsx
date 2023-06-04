import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Article'

      short_name='Article'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h7v-2H7Zm0-4h10v-2H7Zm0-4h10V7H7ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialArticle.displayName = 'AmauiIconMaterialArticle';

export default IconMaterialArticle;
