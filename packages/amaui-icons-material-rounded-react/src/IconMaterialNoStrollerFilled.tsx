import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoStrollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerFilled'

      short_name='NoStroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm11-7.825L11.975 9.15 16.2 4.175q.5-.575 1.125-.875.625-.3 1.325-.3 1.4 0 2.375.975Q22 4.95 22 6.35q0 .425-.288.712-.287.288-.712.288t-.712-.288Q20 6.775 20 6.35q0-.575-.387-.963Q19.225 5 18.65 5q-.25 0-.475.1-.225.1-.4.3L17 6.275ZM15 15l1.4 1.425q-.275.275-.625.425-.35.15-.775.15H7.425q-.65 0-.912-.575-.263-.575.162-1.075l2.7-3.175L2.1 4.925q-.3-.275-.288-.688.013-.412.288-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288l-6.9-6.9Zm1 7q-.825 0-1.412-.587Q14 20.825 14 20q0-.825.588-1.413Q15.175 18 16 18t1.413.587Q18 19.175 18 20q0 .825-.587 1.413Q16.825 22 16 22ZM10.9 8.075 6.525 3.7q.825-.35 1.7-.525Q9.1 3 10 3q1.125 0 2.213.275Q13.3 3.55 14.3 4.1Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerFilled.displayName = 'AmauiIconMaterialNoStrollerFilled';

export default IconMaterialNoStrollerFilled;
