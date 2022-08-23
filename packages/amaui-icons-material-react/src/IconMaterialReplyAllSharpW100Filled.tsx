import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyAllSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllSharpW100Filled'
      short_name='ReplyAll'

      {...props}
    >
      <path d="M7.875 16.1 2.775 11 7.875 5.9 8.375 6.4 3.775 11 8.375 15.6ZM20.525 18.35V15Q20.525 13.5 19.45 12.425Q18.375 11.35 16.875 11.35H9.125L13.375 15.6L12.875 16.1L7.775 11L12.875 5.9L13.375 6.4L9.125 10.65H16.875Q18.675 10.65 19.95 11.925Q21.225 13.2 21.225 15V18.35Z"/>
    </Icon>
  );
});

IconMaterialReplyAllSharpW100Filled.displayName = 'AmauiIconMaterialReplyAllSharpW100Filled';

export default IconMaterialReplyAllSharpW100Filled;
