import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceAround = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAround'

      short_name='AlignSpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm0 720v-80h800v80H80Zm200-520V336h400v120H280Zm0 360V696h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAround.displayName = 'AmauiIconMaterialAlignSpaceAround';

export default IconMaterialAlignSpaceAround;
