import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableViewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewW100Filled'

      short_name='TableView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 19.7q-.625 0-1.062-.438Q8.3 18.825 8.3 18.2V9.8q0-.625.438-1.063Q9.175 8.3 9.8 8.3h8.4q.625 0 1.063.437.437.438.437 1.063v8.4q0 .625-.437 1.062-.438.438-1.063.438Zm.625-7.85h7.15q.575 0 1-.412.425-.413.425-1.013 0-.575-.425-1-.425-.425-1-.425h-7.15q-.575 0-1 .412Q9 9.825 9 10.425q0 .575.425 1 .425.425 1 .425Zm2.125 3.6h2.9v-2.9h-2.9Zm0 3.55h2.9v-2.85h-2.9ZM9 15.45h2.85v-2.9H9Zm7.15 0H19v-2.9h-2.85ZM9.8 19h2.05v-2.85H9v2.05q0 .35.225.575Q9.45 19 9.8 19Zm6.35 0h2.05q.35 0 .575-.225Q19 18.55 19 18.2v-2.05h-2.85ZM5.8 15.7q-.625 0-1.062-.438Q4.3 14.825 4.3 14.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h8.4q.625 0 1.063.437.437.438.437 1.063v1.5H15V5.8q0-.35-.225-.575Q14.55 5 14.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v8.4q0 .35.225.575Q5.45 15 5.8 15h1.5v.7Z"/>
    </Icon>
  );
});

IconMaterialTableViewW100Filled.displayName = 'AmauiIconMaterialTableViewW100Filled';

export default IconMaterialTableViewW100Filled;
