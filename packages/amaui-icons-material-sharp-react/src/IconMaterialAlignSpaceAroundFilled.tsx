import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceAroundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAroundFilled'

      short_name='AlignSpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm0 720v-80h800v80H80Zm200-520V336h400v120H280Zm0 360V696h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAroundFilled.displayName = 'AmauiIconMaterialAlignSpaceAroundFilled';

export default IconMaterialAlignSpaceAroundFilled;
