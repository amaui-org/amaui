import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrolley = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Trolley'

      short_name='Trolley'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17V5H2V3h4v12h15v2Zm2 5q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm1-8V8h6v6Zm2-2h2v-2H9Zm5 2V8h6v6Zm2-2h2v-2h-2Zm3 10q-.825 0-1.413-.587Q17 20.825 17 20q0-.825.587-1.413Q18.175 18 19 18q.825 0 1.413.587Q21 19.175 21 20q0 .825-.587 1.413Q19.825 22 19 22ZM9 12h2Zm7 0h2Z"/>
    </Icon>
  );
});

IconMaterialTrolley.displayName = 'AmauiIconMaterialTrolley';

export default IconMaterialTrolley;
