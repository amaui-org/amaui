import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialP2pFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2pFilled'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-720h360v280h-80v-80H160v320h280v200H80Zm440 80v-280h80v80h200v-320H520v-200h360v720H520ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialP2pFilled.displayName = 'AmauiIconMaterialP2pFilled';

export default IconMaterialP2pFilled;
