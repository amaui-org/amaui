import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkFilled'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23 3v8.125Q22 10.1 20.712 9.55 19.425 9 18 9q-.25 0-.5.012-.25.013-.5.063 0-.575-.413-1.112-.412-.538-1.362-1.238L10 2.95q0-.8.588-1.375Q11.175 1 12 1h9q.825 0 1.413.587Q23 2.175 23 3Zm-6 4h2V5h-2Zm1 14q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21Zm-.5-4.5v2q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-2h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-2v-2q0-.2-.15-.35Q18.2 13 18 13q-.2 0-.35.15-.15.15-.15.35v2h-2q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM1 18v-7.975q0-.5.225-.925.225-.425.625-.7l5-3.575q.525-.375 1.162-.375.638 0 1.163.375l5 3.575q.325.225.538.562.212.338.287.713-1.825.875-2.912 2.587Q11 13.975 11 16q0 .775.163 1.538.162.762.512 1.462H10v-6H6v6H2q-.425 0-.712-.288Q1 18.425 1 18Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkFilled.displayName = 'AmauiIconMaterialAddHomeWorkFilled';

export default IconMaterialAddHomeWorkFilled;
