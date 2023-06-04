import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDetectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetectW100Filled'

      short_name='NestDetect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 21.35q-1.2 0-2.025-.825T6.65 18.5V4.15q0-.625.438-1.063.437-.437 1.062-.437h2.7q.625 0 1.063.437.437.438.437 1.063V18.5q0 1.2-.825 2.025T9.5 21.35Zm-2.15-4.725q.5-.525 1.038-.75.537-.225 1.112-.225.575 0 1.113.225.537.225 1.037.75V4.15q0-.35-.225-.575-.225-.225-.575-.225h-2.7q-.35 0-.575.225-.225.225-.225.575ZM9.5 20.65q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.512q-.637-.638-1.512-.638t-1.512.638q-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638Zm7.65-3.3q-.625 0-1.062-.437-.438-.438-.438-1.063v-7.7q0-.625.438-1.063.437-.437 1.062-.437h.7q.625 0 1.063.437.437.438.437 1.063v7.7q0 .625-.437 1.063-.438.437-1.063.437Zm0-.7h.7q.35 0 .575-.225.225-.225.225-.575v-7.7q0-.35-.225-.575-.225-.225-.575-.225h-.7q-.35 0-.575.225-.225.225-.225.575v7.7q0 .35.225.575.225.225.575.225Z"/>
    </Icon>
  );
});

IconMaterialNestDetectW100Filled.displayName = 'AmauiIconMaterialNestDetectW100Filled';

export default IconMaterialNestDetectW100Filled;
