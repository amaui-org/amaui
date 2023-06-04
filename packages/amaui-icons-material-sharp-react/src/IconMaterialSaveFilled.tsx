import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveFilled'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h14l4 4v14Zm9-3q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6Z"/>
    </Icon>
  );
});

IconMaterialSaveFilled.displayName = 'AmauiIconMaterialSaveFilled';

export default IconMaterialSaveFilled;
