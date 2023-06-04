import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStartFilled'

      short_name='AlignStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm200 240V376h400v120H280Zm0 240V616h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignStartFilled.displayName = 'AmauiIconMaterialAlignStartFilled';

export default IconMaterialAlignStartFilled;
