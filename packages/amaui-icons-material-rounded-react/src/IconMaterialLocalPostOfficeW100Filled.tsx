import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100Filled'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.7q-.275 0-.487-.213Q3.3 20.275 3.3 20v-6q0-.275.213-.488.212-.212.487-.212h3.3V8q0-1.95 1.375-3.325Q10.05 3.3 12 3.3h4q1.95 0 3.325 1.375Q20.7 6.05 20.7 8v12.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7h-5.3V20q0 .275-.212.487-.213.213-.488.213ZM14.7 17H20V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v5.3h6q.275 0 .488.212.212.213.212.488ZM11 9.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-2 8.075q.2 0 .388-.05.187-.05.362-.15l4.075-2.325q.075-.05.125-.125T14 14.6q0-.2-.175-.3-.175-.1-.35 0L9.4 16.625q-.2.125-.4.125t-.4-.125L4.525 14.3q-.175-.1-.35-.013Q4 14.375 4 14.6q0 .075.05.175.05.1.125.125l4.075 2.325q.175.1.363.15.187.05.387.05Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100Filled.displayName = 'AmauiIconMaterialLocalPostOfficeW100Filled';

export default IconMaterialLocalPostOfficeW100Filled;
