import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8v8Zm-.7 8.7V7.3h9.4v9.4ZM8 16h8V8H8Z"/>
    </Icon>
  );
});

IconMaterialStopW100.displayName = 'AmauiIconMaterialStopW100';

export default IconMaterialStopW100;
