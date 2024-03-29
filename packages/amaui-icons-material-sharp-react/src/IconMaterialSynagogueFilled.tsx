import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSynagogueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueFilled'

      short_name='Synagogue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8V7q0-.825.587-1.412Q20.175 5 21 5q.825 0 1.413.588Q23 6.175 23 7v1ZM1 8V7q0-.825.588-1.412Q2.175 5 3 5t1.412.588Q5 6.175 5 7v1Zm0 13V9h4v12Zm5 0V8l6-5 6 5v13h-4v-7h-4v7Zm13 0V9h4v12Zm-7-9.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 8.5 12 8.5t-1.062.438Q10.5 9.375 10.5 10t.438 1.062q.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialSynagogueFilled.displayName = 'AmauiIconMaterialSynagogueFilled';

export default IconMaterialSynagogueFilled;
