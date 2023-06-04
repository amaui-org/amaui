import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindFilled'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.975 16.975-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.325 1.025-.038.525.288.525.888v8.25q0 .6-.525.9-.525.3-1.025-.05Zm-10 0-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.325 1.025-.038.525.288.525.888v8.25q0 .6-.525.9-.525.3-1.025-.05Z"/>
    </Icon>
  );
});

IconMaterialFastRewindFilled.displayName = 'AmauiIconMaterialFastRewindFilled';

export default IconMaterialFastRewindFilled;
