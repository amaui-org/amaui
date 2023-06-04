import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterFilled'

      short_name='AlignCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 616v-80h800v80H80Zm200-120V376h400v120H280Zm0 280V656h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterFilled.displayName = 'AmauiIconMaterialAlignCenterFilled';

export default IconMaterialAlignCenterFilled;
