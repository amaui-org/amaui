import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceAroundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceAroundW100Filled'

      short_name='AlignJustifySpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 924V228h28v696h-28Zm-668 0V228h28v696h-28Zm494-174V402h68v348h-68Zm-360 0V402h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceAroundW100Filled.displayName = 'AmauiIconMaterialAlignJustifySpaceAroundW100Filled';

export default IconMaterialAlignJustifySpaceAroundW100Filled;
