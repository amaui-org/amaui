import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAlt'

      short_name='ViewComfyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35Q10.7 7 10.5 7h-3q-.2 0-.35.15Q7 7.3 7 7.5v3q0 .2.15.35.15.15.35.15Zm6 0h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35Q16.7 7 16.5 7h-3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm-6 6h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm6 0h3q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAlt.displayName = 'AmauiIconMaterialViewComfyAlt';

export default IconMaterialViewComfyAlt;
