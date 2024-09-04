import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknown7 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown7'

      short_name='Unknown7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-80h400v80H440Zm160-160v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248h-80Zm-480 0 136-360h64l136 360h-62l-32-92H216l-32 92h-64Zm114-144h108l-52-150h-4l-52 150Z"/>
    </Icon>
  );
});

IconMaterialUnknown7.displayName = 'AmauiIconMaterialUnknown7';

export default IconMaterialUnknown7;
