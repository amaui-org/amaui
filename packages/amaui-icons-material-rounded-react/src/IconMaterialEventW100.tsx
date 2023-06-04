import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventW100'

      short_name='Event'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18q-.825 0-1.412-.587Q13 16.825 13 16q0-.825.588-1.413Q14.175 14 15 14t1.413.587Q17 15.175 17 16q0 .825-.587 1.413Q15.825 18 15 18Zm-9.2 2.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-8.4H5v8.4q0 .35.225.575Q5.45 20 5.8 20ZM5 10.1h14V6.8q0-.35-.225-.575Q18.55 6 18.2 6H5.8q-.35 0-.575.225Q5 6.45 5 6.8Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEventW100.displayName = 'AmauiIconMaterialEventW100';

export default IconMaterialEventW100;
