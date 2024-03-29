import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOff'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-40-120V535l80 80v81h-80Zm433 158L655 637 480 336l-47 80-58-58 105-182 393 678Zm-695 2h469L350 559 178 856Zm641 172-92-92H40l252-435L27 236l57-57 792 792-57 57ZM499 708Zm45-181Z"/>
    </Icon>
  );
});

IconMaterialWarningOff.displayName = 'AmauiIconMaterialWarningOff';

export default IconMaterialWarningOff;
