import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.2V7.8q0-.625.438-1.062Q5.175 6.3 5.8 6.3h12.4q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438Q4.3 16.825 4.3 16.2Zm1.5.8h2.6q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q8.7 7 8.4 7H5.8q-.3 0-.55.25Q5 7.5 5 7.8v8.4q0 .3.25.55.25.25.55.25Zm4.9 0h2.6q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q13.6 7 13.3 7h-2.6q-.3 0-.55.25-.25.25-.25.55v8.4q0 .3.25.55.25.25.55.25Zm4.9 0h2.6q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q18.5 7 18.2 7h-2.6q-.3 0-.55.25-.25.25-.25.55v8.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100.displayName = 'AmauiIconMaterialViewColumnW100';

export default IconMaterialViewColumnW100;
