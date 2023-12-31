import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Browse'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h320v240H120Zm400 0v-400h320v400H520ZM360-280Zm240-160Zm-480 0v-400h320v400H120Zm240-80Zm160-80v-240h320v240H520Zm80-80ZM200-200h160v-80H200v80Zm400 0h160v-240H600v240ZM200-520h160v-240H200v240Zm400-160h160v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialBrowse.displayName = 'AmauiIconMaterialBrowse';

export default IconMaterialBrowse;
