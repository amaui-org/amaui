import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorbell3p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell3p'

      short_name='Doorbell3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20V4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v16q0 .825-.587 1.413Q17.825 22 17 22Zm0-2h10V4H7v16Zm5-1q.825 0 1.413-.587Q14 17.825 14 17q0-.825-.587-1.412Q12.825 15 12 15q-.825 0-1.412.588Q10 16.175 10 17t.588 1.413Q11.175 19 12 19Zm0-1q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm0-4.5q.45 0 .725-.275Q13 12.95 13 12.5h-2q0 .45.275.725.275.275.725.275ZM8 12h8v-1h-1V8.7q0-1.125-.575-2.012Q13.85 5.8 12.8 5.5v-.3q0-.35-.225-.575Q12.35 4.4 12 4.4t-.575.225q-.225.225-.225.575v.3q-1.05.375-1.625 1.225Q9 7.575 9 8.7V11H8Zm-1 8V4v16Z"/>
    </Icon>
  );
});

IconMaterialDoorbell3p.displayName = 'AmauiIconMaterialDoorbell3p';

export default IconMaterialDoorbell3p;
