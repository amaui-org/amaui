import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoStroller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStroller'

      short_name='NoStroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm11-7.825-2-2V8.35l.2.075-1.8 2.125-1.425-1.4L16.2 4.175q.5-.575 1.125-.875.625-.3 1.325-.3 1.4 0 2.375.975Q22 4.95 22 6.35V7h-2v-.65q0-.575-.387-.963Q19.225 5 18.65 5q-.25 0-.475.1-.225.1-.4.3L17 6.275ZM15 15l2 2H5.275l4.1-4.825L1.4 4.225 2.8 2.8l18.4 18.4-1.425 1.4-9-9L9.6 15H15Zm1 7q-.825 0-1.412-.587Q14 20.825 14 20q0-.825.588-1.413Q15.175 18 16 18t1.413.587Q18 19.175 18 20q0 .825-.587 1.413Q16.825 22 16 22Zm-4.55-7.725Zm2.7-2.975ZM10.9 8.075 9.475 6.65l1.375-1.6q-.2-.05-.425-.05H10q-.5 0-.962.075-.463.075-.938.2L6.525 3.7q.825-.35 1.7-.525Q9.1 3 10 3q1.125 0 2.213.275Q13.3 3.55 14.3 4.1ZM9.475 6.65Z"/>
    </Icon>
  );
});

IconMaterialNoStroller.displayName = 'AmauiIconMaterialNoStroller';

export default IconMaterialNoStroller;
