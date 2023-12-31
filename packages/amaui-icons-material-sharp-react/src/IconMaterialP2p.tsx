import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialP2p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2p'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-720h360v280h-80v-80H160v320h280v200H80Zm440 80v-280h80v80h200v-320H520v-200h360v720H520ZM160-240h200v-40H160v40Zm440 80h200v-40H600v40ZM160-760h200v-40H160v40Zm440 80h200v-40H600v40ZM160-240v-40 40Zm440 80v-40 40ZM160-760v-40 40Zm440 80v-40 40ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialP2p.displayName = 'AmauiIconMaterialP2p';

export default IconMaterialP2p;
