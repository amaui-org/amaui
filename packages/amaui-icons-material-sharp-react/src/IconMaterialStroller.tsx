import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStroller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stroller'

      short_name='Stroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22q-.825 0-1.412-.587Q14 20.825 14 20q0-.825.588-1.413Q15.175 18 16 18t1.413.587Q18 19.175 18 20q0 .825-.587 1.413Q16.825 22 16 22ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm3.6-7H15V8.65Zm-4.325 2L16.2 4.175q.5-.575 1.112-.875.613-.3 1.338-.3 1.4 0 2.375.975Q22 4.95 22 6.35V7h-2v-.65q0-.575-.387-.963Q19.225 5 18.65 5q-.275 0-.487.1-.213.1-.388.3L17 6.275V17Zm6.975-5.1ZM9.475 6.65l1.375-1.6q-.2-.025-.412-.038Q10.225 5 10 5q-.5 0-.962.075-.463.075-.938.2ZM9.6 9.6 4.725 4.725q1.2-.85 2.525-1.287Q8.575 3 10 3q1.125 0 2.213.275Q13.3 3.55 14.3 4.1Zm-.125-2.95Z"/>
    </Icon>
  );
});

IconMaterialStroller.displayName = 'AmauiIconMaterialStroller';

export default IconMaterialStroller;
