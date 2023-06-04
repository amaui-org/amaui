import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfAutoHideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfAutoHideFilled'

      short_name='ShelfAutoHide'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776q17 0 28.5-11.5T520 736q0-17-11.5-28.5T480 696q-17 0-28.5 11.5T440 736q0 17 11.5 28.5T480 776Zm-160 0q17 0 28.5-11.5T360 736q0-17-11.5-28.5T320 696q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776Zm320 0q17 0 28.5-11.5T680 736q0-17-11.5-28.5T640 696q-17 0-28.5 11.5T600 736q0 17 11.5 28.5T640 776ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialShelfAutoHideFilled.displayName = 'AmauiIconMaterialShelfAutoHideFilled';

export default IconMaterialShelfAutoHideFilled;
