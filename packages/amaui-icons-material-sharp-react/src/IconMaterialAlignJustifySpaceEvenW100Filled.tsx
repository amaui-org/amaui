import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceEvenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEvenW100Filled'

      short_name='AlignJustifySpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 924V228h28v696h-28Zm-668 0V228h28v696h-28Zm454-174V402h68v348h-68Zm-280 0V402h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEvenW100Filled.displayName = 'AmauiIconMaterialAlignJustifySpaceEvenW100Filled';

export default IconMaterialAlignJustifySpaceEvenW100Filled;
