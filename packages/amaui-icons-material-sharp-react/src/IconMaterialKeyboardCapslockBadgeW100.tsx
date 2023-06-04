import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeW100'

      short_name='KeyboardCapslockBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M317 724h326v-28H317v28Zm19-109 144-143 144 143 19-19-163-164-163 164 19 19ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeW100.displayName = 'AmauiIconMaterialKeyboardCapslockBadgeW100';

export default IconMaterialKeyboardCapslockBadgeW100;
