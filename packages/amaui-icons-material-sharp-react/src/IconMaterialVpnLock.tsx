import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnLock'

      short_name='VpnLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q.8 0 1.538.112.737.113 1.462.338V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h6q.425 0 .713.287.287.288.287.713v3h1q.675 0 1.188.4.512.4.712 1 .975-1.1 1.538-2.462Q20 13.575 20 12q0-.275-.025-.5-.025-.225-.075-.5h2.05q.05.275.05.5v.5q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm-1-2.05V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.1 2.013 5.337Q8.025 19.575 11 19.95ZM17 9V4h1V3q0-.825.587-1.413Q19.175 1 20 1q.825 0 1.413.587Q22 2.175 22 3v1h1v5Zm2-5h2V3q0-.425-.288-.713Q20.425 2 20 2t-.712.287Q19 2.575 19 3Z"/>
    </Icon>
  );
});

IconMaterialVpnLock.displayName = 'AmauiIconMaterialVpnLock';

export default IconMaterialVpnLock;
