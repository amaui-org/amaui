import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceEven = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEven'

      short_name='AlignSpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm0 720v-80h800v80H80Zm200-480V376h400v120H280Zm0 280V656h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEven.displayName = 'AmauiIconMaterialAlignSpaceEven';

export default IconMaterialAlignSpaceEven;
