import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBento = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bento'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm10-8h6V7h-6ZM4 17h8V7H4v10Zm4-3.5q-.625 0-1.062-.438Q6.5 12.625 6.5 12t.438-1.062Q7.375 10.5 8 10.5t1.062.438Q9.5 11.375 9.5 12t-.438 1.062Q8.625 13.5 8 13.5Zm6 3.5h6v-4h-6Z"/>
    </Icon>
  );
});

IconMaterialBento.displayName = 'AmauiIconMaterialBento';

export default IconMaterialBento;
