import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100Filled'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7v-7.4h4V8q0-1.95 1.375-3.325Q10.05 3.3 12 3.3h4q1.95 0 3.325 1.375Q20.7 6.05 20.7 8v12.7H20v-3h-5.3v3ZM14.7 17H20V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v5.3h6.7Zm-4.05-7.65v-.7h6.7v.7ZM9 17.65l5-2.85V14l-5 2.85L4 14v.8Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100Filled.displayName = 'AmauiIconMaterialLocalPostOfficeW100Filled';

export default IconMaterialLocalPostOfficeW100Filled;
