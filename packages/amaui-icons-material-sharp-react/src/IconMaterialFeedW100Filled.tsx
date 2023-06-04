import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedW100Filled'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h11.15l4.25 4.25V19.7Zm3.35-4h8.7V15h-8.7Zm0-6.7H12v-.7H7.65Zm0 3.35h8.7v-.7h-8.7ZM15 9h4l-4-4Z"/>
    </Icon>
  );
});

IconMaterialFeedW100Filled.displayName = 'AmauiIconMaterialFeedW100Filled';

export default IconMaterialFeedW100Filled;
