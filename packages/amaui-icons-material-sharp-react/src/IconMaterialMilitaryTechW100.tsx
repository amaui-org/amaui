import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMilitaryTechW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechW100'

      short_name='MilitaryTech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.85 19.9.85-2.65-2.15-1.5h2.6l.75-2.4-4.4-2.55V2.75h9v7.925l-4.4 2.675.75 2.4h2.6l-2.15 1.5.85 2.65L12 18.25ZM8.2 3.45v6.95l3.45 2V3.45Zm7.6 0h-3.45v8.95l3.45-2ZM12 8.025Zm-.35-.1Zm.7 0Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100.displayName = 'AmauiIconMaterialMilitaryTechW100';

export default IconMaterialMilitaryTechW100;
