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
      <path d="M5 19.7q-.3 0-.5-.2t-.2-.5V5q0-.3.2-.5t.5-.2h10.45l4.25 4.25V19q0 .3-.2.5t-.5.2Zm3-4h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25T16 15H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM8 9h3.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25T8 9Zm0 3.35h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM15.75 9H19l-4-4v3.25q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialFeedW100Filled.displayName = 'AmauiIconMaterialFeedW100Filled';

export default IconMaterialFeedW100Filled;
