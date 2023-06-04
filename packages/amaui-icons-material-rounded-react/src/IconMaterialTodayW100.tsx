import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTodayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayW100'

      short_name='Today'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15.35q-.825 0-1.412-.588Q7 14.175 7 13.35t.588-1.412Q8.175 11.35 9 11.35t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-8.4H5v8.4q0 .35.225.575Q5.45 20 5.8 20ZM5 10.1h14V6.8q0-.35-.225-.575Q18.55 6 18.2 6H5.8q-.35 0-.575.225Q5 6.45 5 6.8Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialTodayW100.displayName = 'AmauiIconMaterialTodayW100';

export default IconMaterialTodayW100;
