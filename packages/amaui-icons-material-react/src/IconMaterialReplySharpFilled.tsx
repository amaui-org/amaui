import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplySharpFilled'
      short_name='Reply'

      {...props}
    >
      <path d="M19 19V15Q19 13.75 18.125 12.875Q17.25 12 16 12H6.8L10.4 15.6L9 17L3 11L9 5L10.4 6.4L6.8 10H16Q18.075 10 19.538 11.462Q21 12.925 21 15V19Z"/>
    </Icon>
  );
});

IconMaterialReplySharpFilled.displayName = 'AmauiIconMaterialReplySharpFilled';

export default IconMaterialReplySharpFilled;
