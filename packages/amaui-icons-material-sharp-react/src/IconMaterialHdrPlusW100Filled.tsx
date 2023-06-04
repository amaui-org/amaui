import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusW100Filled'

      short_name='HdrPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Zm-4.6-9.1h.7V9.1h2.8v2.5h.7V6.4h-.7v2H8.1v-2h-.7Zm7.5 5.5h.7v-1.5h1.5v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-1.5-5.5h2.2q.65 0 1.075-.425.425-.425.425-1.075V7.9q0-.65-.425-1.075Q16.25 6.4 15.6 6.4h-2.2Zm-3.3 4.3h-2v-1.8h2q.35 0 .575.225.225.225.225.575v.2q0 .35-.225.575-.225.225-.575.225Zm.525 2.7h.775l-.9-2.05q.475-.175.788-.562.312-.388.312-.888v-.2q0-.625-.437-1.063-.438-.437-1.063-.437H7.4v5.2h.7v-2h1.65Zm3.475-7.7V7.1h1.5q.35 0 .575.225.225.225.225.575v2.2q0 .35-.225.575-.225.225-.575.225Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusW100Filled.displayName = 'AmauiIconMaterialHdrPlusW100Filled';

export default IconMaterialHdrPlusW100Filled;
