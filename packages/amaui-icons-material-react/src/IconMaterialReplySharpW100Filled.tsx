import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplySharpW100Filled'
      short_name='Reply'

      {...props}
    >
      <path d="M19.525 18.35V15Q19.525 13.475 18.463 12.412Q17.4 11.35 15.875 11.35H5.125L9.375 15.6L8.875 16.1L3.775 11L8.875 5.9L9.375 6.4L5.125 10.65H15.875Q17.675 10.65 18.95 11.925Q20.225 13.2 20.225 15V18.35Z"/>
    </Icon>
  );
});

IconMaterialReplySharpW100Filled.displayName = 'AmauiIconMaterialReplySharpW100Filled';

export default IconMaterialReplySharpW100Filled;
