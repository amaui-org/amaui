import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMilitaryTechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechW100Filled'

      short_name='MilitaryTech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.85 19.9.85-2.65-2.15-1.5h2.6l.75-2.4-4.4-2.55V2.75h9v7.925l-4.4 2.675.75 2.4h2.6l-2.15 1.5.85 2.65L12 18.25ZM12 12.6l.35-.2V3.45h-.7v8.95Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100Filled.displayName = 'AmauiIconMaterialMilitaryTechW100Filled';

export default IconMaterialMilitaryTechW100Filled;
