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
      <path d="M10.875 19.125q-.225.2-.475.012-.25-.187-.15-.462l.45-1.425-1.1-.775q-.25-.175-.162-.45.087-.275.387-.275h1.325l.75-2.4-3.35-1.95q-.5-.275-.775-.763Q7.5 10.15 7.5 9.6V4.25q0-.625.438-1.062Q8.375 2.75 9 2.75h6q.625 0 1.062.438.438.437.438 1.062V9.6q0 .525-.3.987-.3.463-.8.763l-3.3 2 .75 2.4h1.325q.3 0 .387.275.088.275-.162.45l-1.1.775.45 1.425q.1.275-.15.462-.25.188-.475-.012L12 18.25ZM8.2 4.25V9.6q0 .375.188.687.187.313.512.513l2.75 1.6V3.45H9q-.35 0-.575.225Q8.2 3.9 8.2 4.25Zm7.6 0q0-.35-.225-.575Q15.35 3.45 15 3.45h-2.65v8.95l2.75-1.6q.325-.2.513-.513.187-.312.187-.687ZM12 8.025Zm-.35-.1Zm.7 0Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100.displayName = 'AmauiIconMaterialMilitaryTechW100';

export default IconMaterialMilitaryTechW100;
