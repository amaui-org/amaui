import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPositionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionFilled'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 736v120q0 33 23.5 56.5T200 936h600q33 0 56.5-23.5T880 856V736H120Zm560-80h200V296q0-33-23.5-56.5T800 216H680v440Zm-560 0h200V216H200q-33 0-56.5 23.5T120 296v360Zm280 0h200V216H400v440Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionFilled.displayName = 'AmauiIconMaterialShelfPositionFilled';

export default IconMaterialShelfPositionFilled;
