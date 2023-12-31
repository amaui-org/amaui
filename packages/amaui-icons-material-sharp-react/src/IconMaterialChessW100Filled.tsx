import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessW100Filled'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-133h100l29-201h-89v-28h456v28h-89l29 201h100v133H212Zm122-390-50-226q27 16 48.5 22.5T380-759q31 0 56-8t44-22q19 14 44 22t55 8q23 0 43.5-6t54.5-23l-51 226H334Z"/>
    </Icon>
  );
});

IconMaterialChessW100Filled.displayName = 'AmauiIconMaterialChessW100Filled';

export default IconMaterialChessW100Filled;
