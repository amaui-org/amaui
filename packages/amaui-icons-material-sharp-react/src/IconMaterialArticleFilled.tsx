import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleFilled'

      short_name='Article'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h7v-2H7Zm0-4h10v-2H7Zm0-4h10V7H7ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialArticleFilled.displayName = 'AmauiIconMaterialArticleFilled';

export default IconMaterialArticleFilled;
