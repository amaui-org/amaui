import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 16.2V7.8q0-.625.438-1.062Q5.675 6.3 6.3 6.3h11.4q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438H6.3q-.625 0-1.062-.438Q4.8 16.825 4.8 16.2ZM10 7.8v3.05q0 .3.25.55.25.25.55.25h6.9q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q18 7 17.7 7h-6.9q-.3 0-.55.25-.25.25-.25.55Zm7.7 4.55h-2.3q-.3 0-.55.25-.25.25-.25.55v3.05q0 .3.25.55.25.25.55.25h2.3q.3 0 .55-.25.25-.25.25-.55v-3.05q0-.3-.25-.55-.25-.25-.55-.25Zm-7.7.8v3.05q0 .3.25.55.25.25.55.25h2.3q.3 0 .55-.25.25-.25.25-.55v-3.05q0-.3-.25-.55-.25-.25-.55-.25h-2.3q-.3 0-.55.25-.25.25-.25.55ZM6.3 17h2.2q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q8.8 7 8.5 7H6.3q-.3 0-.55.25-.25.25-.25.55v8.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100.displayName = 'AmauiIconMaterialViewQuiltW100';

export default IconMaterialViewQuiltW100;
