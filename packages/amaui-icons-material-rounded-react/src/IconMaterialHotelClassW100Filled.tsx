import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassW100Filled'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.225 17.8q-.225.175-.462.012-.238-.162-.163-.437L8.65 13.9l-2.6-1.875q-.25-.175-.162-.45.087-.275.387-.275h3.25l1.1-3.55q.05-.15.15-.225.1-.075.225-.075t.225.075q.1.075.15.225l1.1 3.55h3.25q.3 0 .388.275.087.275-.163.45l-2.6 1.875 1.05 3.475q.075.275-.162.437-.238.163-.463-.012L11 15.7Zm8.375 0 .025.025-.95-3.15 2.5-1.8h-.05q-.6 0-.087.3.512.3.337.425L16.5 14.95l.725 2.425q.05.2-.525.137-.575-.062-.1.288Zm-2.65-8.5-.325-1.05.15-.475q.05-.15.15-.225.1-.075.225-.075t.225.075q.1.075.15.225L15 9.3Z"/>
    </Icon>
  );
});

IconMaterialHotelClassW100Filled.displayName = 'AmauiIconMaterialHotelClassW100Filled';

export default IconMaterialHotelClassW100Filled;
