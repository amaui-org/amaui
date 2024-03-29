import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamFilled'

      short_name='Stream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14q-.825 0-1.412-.588Q2 12.825 2 12t.588-1.413Q3.175 10 4 10t1.412.587Q6 11.175 6 12q0 .825-.588 1.412Q4.825 14 4 14Zm1.65 5.7-1.4-1.4 4.35-4.35 1.4 1.4Zm3-9.7L4.3 5.65l1.4-1.4 4.35 4.35ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20q0-.825.588-1.413Q11.175 18 12 18t1.413.587Q14 19.175 14 20q0 .825-.587 1.413Q12.825 22 12 22Zm0-16q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm3.35 4.05-1.4-1.45 4.4-4.35 1.4 1.4Zm3 9.65L14 15.35l1.4-1.4 4.35 4.35ZM20 14q-.825 0-1.413-.588Q18 12.825 18 12t.587-1.413Q19.175 10 20 10q.825 0 1.413.587Q22 11.175 22 12q0 .825-.587 1.412Q20.825 14 20 14Z"/>
    </Icon>
  );
});

IconMaterialStreamFilled.displayName = 'AmauiIconMaterialStreamFilled';

export default IconMaterialStreamFilled;
