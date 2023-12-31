import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReorderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderFilled'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-80h200v-80H80v-80h160v-80H122v-80h118v-118l-78-168 72-34 94 200h464l-78-166 72-34 94 200v520H40Zm440-280h160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderFilled.displayName = 'AmauiIconMaterialQuickReorderFilled';

export default IconMaterialQuickReorderFilled;
