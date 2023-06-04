import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPositionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884V268h656v616H172Zm28-174v146h600V710H200Zm460-28h140V296H660v386Zm-460 0h140V296H200v386Zm168 0h264V296H368v386Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100.displayName = 'AmauiIconMaterialShelfPositionW100';

export default IconMaterialShelfPositionW100;
