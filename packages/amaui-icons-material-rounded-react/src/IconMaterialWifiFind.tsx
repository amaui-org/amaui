import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFind'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 20.275q-.3.3-.712.3-.413 0-.713-.3l-9.9-9.925q-.3-.3-.437-.65Q.8 9.35.825 8.975.85 8.6 1 8.262q.15-.337.45-.587 2.2-1.725 4.862-2.7Q8.975 4 12 4t5.688.975q2.662.975 4.862 2.7.3.25.45.587.15.338.175.713.025.375-.125.737-.15.363-.425.663l-.025.025q-2.025-2.025-4.75-3.212Q15.125 6 12 6q-2.575 0-4.875.812-2.3.813-4.2 2.263l9.775 9.8q.275.275.275.687 0 .413-.275.713Zm8.2-.975-1.875-1.85q-.45.275-.95.413Q17.575 18 17 18q-1.7 0-2.85-1.15Q13 15.7 13 14q0-1.7 1.15-2.85Q15.3 10 17 10q1.7 0 2.85 1.15Q21 12.3 21 14q0 .575-.137 1.075-.138.5-.413.95L22.3 17.9q.275.275.288.687.012.413-.288.713-.275.275-.7.275-.425 0-.7-.275ZM17 16q.85 0 1.425-.575Q19 14.85 19 14q0-.85-.575-1.425Q17.85 12 17 12q-.85 0-1.425.575Q15 13.15 15 14q0 .85.575 1.425Q16.15 16 17 16Zm-5 3.575Z"/>
    </Icon>
  );
});

IconMaterialWifiFind.displayName = 'AmauiIconMaterialWifiFind';

export default IconMaterialWifiFind;
