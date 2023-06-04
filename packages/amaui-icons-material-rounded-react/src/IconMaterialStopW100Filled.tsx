import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100Filled'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.8 16.7q-.625 0-1.062-.438Q7.3 15.825 7.3 15.2V8.8q0-.625.438-1.063Q8.175 7.3 8.8 7.3h6.4q.625 0 1.062.437.438.438.438 1.063v6.4q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialStopW100Filled.displayName = 'AmauiIconMaterialStopW100Filled';

export default IconMaterialStopW100Filled;
