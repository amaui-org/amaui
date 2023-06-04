import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100Filled'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M630 844h28V736h-28v108Zm14-139q6 1 10-3.5t4-10.5q0-6-4.5-10t-9.5-4q-6 0-10 4t-4 10q0 5 4 9.5t10 4.5Zm0 203q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM532 404h148L532 256l148 148-148-148v148ZM172 924V228h374l162 162v130q-16-5-31.5-6.5T644 512q-58 0-107.5 24T453 602H306v28h127q-17 29-27 62.5T396 762h-90v28h92q5 37 20 71t40 63H172Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100Filled.displayName = 'AmauiIconMaterialQuickReferenceW100Filled';

export default IconMaterialQuickReferenceW100Filled;
