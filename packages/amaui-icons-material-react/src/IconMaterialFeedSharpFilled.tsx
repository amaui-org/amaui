import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedSharpFilled'
      short_name='Feed'

      {...props}
    >
      <path d="M3 21V3H16L21 8V21ZM7 17H17V15H7ZM7 9H12V7H7ZM7 13H17V11H7ZM15 9H19L15 5Z"/>
    </Icon>
  );
});

IconMaterialFeedSharpFilled.displayName = 'AmauiIconMaterialFeedSharpFilled';

export default IconMaterialFeedSharpFilled;
