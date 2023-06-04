import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Publish'

      short_name='Publish'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity=".3"/><path d="M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z"/>
    </Icon>
  );
});

IconMaterialPublish.displayName = 'AmauiIconMaterialPublish';

export default IconMaterialPublish;
