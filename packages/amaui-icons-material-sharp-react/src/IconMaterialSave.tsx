import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSave = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Save'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h14l4 4v14Zm2-2h14V7.85L16.15 5H5Zm7-1q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6Zm-1 9V5v14Z"/>
    </Icon>
  );
});

IconMaterialSave.displayName = 'AmauiIconMaterialSave';

export default IconMaterialSave;
