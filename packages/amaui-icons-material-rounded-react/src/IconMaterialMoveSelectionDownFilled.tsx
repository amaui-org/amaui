import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionDownFilled'

      short_name='MoveSelectionDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 976q-33 0-56.5-23.5T240 896V576q0-33 23.5-56.5T320 496h320q33 0 56.5 23.5T720 576v320q0 33-23.5 56.5T640 976H320Zm-80-560v-80h80v80h-80Zm400 0v-80h80v80h-80ZM440 256v-80h80v80h-80Zm-200 0q0-33 23.5-56.5T320 176v80h-80Zm400 0v-80q33 0 56.5 23.5T720 256h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionDownFilled.displayName = 'AmauiIconMaterialMoveSelectionDownFilled';

export default IconMaterialMoveSelectionDownFilled;
