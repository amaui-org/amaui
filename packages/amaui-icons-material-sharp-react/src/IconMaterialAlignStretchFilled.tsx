import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretchFilled'

      short_name='AlignStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 496V256H80v-80h800v80H680v240H280ZM80 976v-80h200V656h400v240h200v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignStretchFilled.displayName = 'AmauiIconMaterialAlignStretchFilled';

export default IconMaterialAlignStretchFilled;
