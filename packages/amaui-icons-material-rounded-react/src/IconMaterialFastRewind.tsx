import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewind'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.95 16.975-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.35 1.025-.05.525.3.525.9v8.25q0 .6-.525.9-.525.3-1.025-.05Zm-10 0-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.35 1.025-.05.525.3.525.9v8.25q0 .6-.525.9-.525.3-1.025-.05ZM9.5 12Zm10 0Zm-10 2.25v-4.5L6.1 12Zm10 0v-4.5L16.1 12Z"/>
    </Icon>
  );
});

IconMaterialFastRewind.displayName = 'AmauiIconMaterialFastRewind';

export default IconMaterialFastRewind;
