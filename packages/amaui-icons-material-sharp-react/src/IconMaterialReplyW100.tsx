import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyW100'

      short_name='Reply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.525 18.35V15q0-1.525-1.062-2.588-1.063-1.062-2.588-1.062H5.125l4.25 4.25-.5.5-5.1-5.1 5.1-5.1.5.5-4.25 4.25h10.75q1.8 0 3.075 1.275Q20.225 13.2 20.225 15v3.35Z"/>
    </Icon>
  );
});

IconMaterialReplyW100.displayName = 'AmauiIconMaterialReplyW100';

export default IconMaterialReplyW100;
