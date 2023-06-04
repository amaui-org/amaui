import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M630 844h28V736h-28v108Zm14-139q6 1 10-3.5t4-10.5q0-6-4.5-10t-9.5-4q-6 0-10 4t-4 10q0 5 4 9.5t10 4.5ZM200 256v259-3 384-640 148-148Zm106 374h127q5-8 10-14.5t10-13.5H306v28Zm0 160h92q-1-7-1.5-14t-.5-14h-90v28ZM172 924V228h374l162 162v130q-7-2-13.5-3t-14.5-2V404H532V256H200v640h236q5 8 10.5 14.5T458 924H172Zm472-312q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100.displayName = 'AmauiIconMaterialQuickReferenceW100';

export default IconMaterialQuickReferenceW100;
