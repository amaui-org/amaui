import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeW100Filled'

      short_name='KeyboardCapslockBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M317 724h326v-28H317v28Zm19-109 144-143 144 143 19-19-163-164-163 164 19 19ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeW100Filled.displayName = 'AmauiIconMaterialKeyboardCapslockBadgeW100Filled';

export default IconMaterialKeyboardCapslockBadgeW100Filled;
