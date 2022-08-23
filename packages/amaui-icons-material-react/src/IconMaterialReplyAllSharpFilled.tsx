import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyAllSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllSharpFilled'
      short_name='ReplyAll'

      {...props}
    >
      <path d="M8 17 2 11 8 5 9.425 6.4 4.825 11 9.425 15.6ZM20 19V15Q20 13.75 19.125 12.875Q18.25 12 17 12H10.825L14.425 15.6L13 17L7 11L13 5L14.425 6.4L10.825 10H17Q19.075 10 20.538 11.462Q22 12.925 22 15V19Z"/>
    </Icon>
  );
});

IconMaterialReplyAllSharpFilled.displayName = 'AmauiIconMaterialReplyAllSharpFilled';

export default IconMaterialReplyAllSharpFilled;
