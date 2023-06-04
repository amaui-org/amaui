import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMilitaryTechFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechFilled'

      short_name='MilitaryTech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.9 22 1.2-3.8L7 16h3.8l.7-2.3L7 11.05V2h10v9.05l-4.5 2.65.7 2.3H17l-3.1 2.2 1.2 3.8-3.1-2.35ZM12 11.65l1-.6V4h-2v7.05Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechFilled.displayName = 'AmauiIconMaterialMilitaryTechFilled';

export default IconMaterialMilitaryTechFilled;
