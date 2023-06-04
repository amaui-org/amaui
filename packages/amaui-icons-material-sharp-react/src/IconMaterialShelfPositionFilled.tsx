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
      <path d="M120 736v200h760V736H120Zm560-80h200V216H680v440Zm-560 0h200V216H120v440Zm280 0h200V216H400v440Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionFilled.displayName = 'AmauiIconMaterialShelfPositionFilled';

export default IconMaterialShelfPositionFilled;
