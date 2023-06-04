import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenterW100'

      short_name='AlignFlexCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M476 924V610H146v-68h330V228h28v314h310v68H504v314h-28Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenterW100.displayName = 'AmauiIconMaterialAlignFlexCenterW100';

export default IconMaterialAlignFlexCenterW100;
