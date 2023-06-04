import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedW100'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h11.15l4.25 4.25V19.7ZM5 19h14V9h-4V5H5Zm2.65-3.3h8.7V15h-8.7Zm0-6.7H12v-.7H7.65Zm0 3.35h8.7v-.7h-8.7ZM5 5v4-4 14Z"/>
    </Icon>
  );
});

IconMaterialFeedW100.displayName = 'AmauiIconMaterialFeedW100';

export default IconMaterialFeedW100;
