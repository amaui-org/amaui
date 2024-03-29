import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Soap'

      short_name='Soap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 7.5q.3 0 .525-.225Q15 7.05 15 6.75q0-.3-.225-.525Q14.55 6 14.25 6q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm0 1.5q-.95 0-1.6-.65Q12 7.7 12 6.75q0-.95.65-1.6.65-.65 1.6-.65.95 0 1.6.65.65.65.65 1.6 0 .95-.65 1.6-.65.65-1.6.65ZM20 6.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM20 8q-.825 0-1.413-.588Q18 6.825 18 6t.587-1.412Q19.175 4 20 4q.825 0 1.413.588Q22 5.175 22 6t-.587 1.412Q20.825 8 20 8Zm-3.5-4q-.625 0-1.062-.438Q15 3.125 15 2.5t.438-1.062Q15.875 1 16.5 1t1.062.438Q18 1.875 18 2.5t-.438 1.062Q17.125 4 16.5 4ZM1 23V12.7L9.125 5l1.625 1.7L8.875 10H20v2.5h-8v1h10V16H12v1h9v2.5h-9v1h7V23Zm2-2h7v-9H7V9.775l-4 3.75Zm3.5-5.625Z"/>
    </Icon>
  );
});

IconMaterialSoap.displayName = 'AmauiIconMaterialSoap';

export default IconMaterialSoap;
