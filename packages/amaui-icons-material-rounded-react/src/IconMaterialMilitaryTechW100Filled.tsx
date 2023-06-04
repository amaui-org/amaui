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
      <path d="M10.875 19.125q-.25.175-.488 0-.237-.175-.137-.45l.45-1.425-1.1-.775q-.25-.175-.162-.45.087-.275.387-.275h1.325l.75-2.4-3.35-1.95q-.5-.275-.775-.763Q7.5 10.15 7.5 9.6V4.25q0-.625.438-1.062Q8.375 2.75 9 2.75h6q.625 0 1.062.438.438.437.438 1.062V9.6q0 .525-.3.987-.3.463-.8.763l-3.3 2 .75 2.4h1.325q.3 0 .387.275.088.275-.162.45l-1.1.775.45 1.425q.1.275-.137.45-.238.175-.488 0L12 18.25ZM12 12.6l.35-.2V3.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v8.6Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100Filled.displayName = 'AmauiIconMaterialMilitaryTechW100Filled';

export default IconMaterialMilitaryTechW100Filled;
