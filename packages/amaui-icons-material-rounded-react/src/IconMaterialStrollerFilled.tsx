import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerFilled'

      short_name='Stroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.775 3.6q.775-.3 1.575-.45Q9.15 3 10 3q1.125 0 2.213.275Q13.3 3.55 14.3 4.1L9.6 9.6 6.375 6.375q-.3-.3-.45-.65-.15-.35-.15-.7 0-.45.25-.838.25-.387.75-.587ZM16 22q-.825 0-1.412-.587Q14 20.825 14 20q0-.825.588-1.413Q15.175 18 16 18t1.413.587Q18 19.175 18 20q0 .825-.587 1.413Q16.825 22 16 22ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm1.425-5q-.65 0-.912-.575-.263-.575.162-1.075L16.2 4.175q.5-.575 1.112-.875.613-.3 1.338-.3 1.4 0 2.375.975Q22 4.95 22 6.35q0 .425-.288.712-.287.288-.712.288t-.712-.288Q20 6.775 20 6.35q0-.575-.387-.963Q19.225 5 18.65 5q-.275 0-.487.1-.213.1-.388.3L17 6.275V15q0 .825-.587 1.413Q15.825 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialStrollerFilled.displayName = 'AmauiIconMaterialStrollerFilled';

export default IconMaterialStrollerFilled;
