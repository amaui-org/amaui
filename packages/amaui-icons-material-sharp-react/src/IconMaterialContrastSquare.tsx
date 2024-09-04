import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastSquare'

      short_name='ContrastSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560L200-200Zm20-400h80v80h60v-80h80v-60h-80v-80h-60v80h-80v60Zm461 280H481v-60h200v60Z"/>
    </Icon>
  );
});

IconMaterialContrastSquare.displayName = 'AmauiIconMaterialContrastSquare';

export default IconMaterialContrastSquare;
