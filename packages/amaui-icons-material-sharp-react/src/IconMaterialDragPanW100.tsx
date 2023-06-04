import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragPanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPanW100'

      short_name='DragPan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 940 346 806l20-20 100 100V590H170l100 100-20 20-134-134 134-134 20 20-100 100h296V266L366 366l-20-20 134-134 134 134-20 20-100-100v296h296L690 462l20-20 134 134-134 134-20-20 100-100H494v296l100-100 20 20-134 134Z"/>
    </Icon>
  );
});

IconMaterialDragPanW100.displayName = 'AmauiIconMaterialDragPanW100';

export default IconMaterialDragPanW100;
