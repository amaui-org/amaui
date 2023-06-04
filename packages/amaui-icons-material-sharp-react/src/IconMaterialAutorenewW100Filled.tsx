import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutorenewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewW100Filled'

      short_name='Autorenew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.275 14.95q-.3-.675-.463-1.413-.162-.737-.162-1.487 0-3.075 2.15-5.238Q8.95 4.65 12 4.65h1.75L11.5 2.4l.5-.5L15.1 5 12 8.1l-.5-.5 2.25-2.25H12q-2.775 0-4.713 1.95Q5.35 9.25 5.35 12.05q0 .575.113 1.188.112.612.337 1.187ZM12 22.1 8.9 19l3.1-3.1.5.5-2.25 2.25H12q2.775 0 4.713-1.95 1.937-1.95 1.937-4.75 0-.575-.112-1.188-.113-.612-.338-1.187l.525-.525q.3.675.463 1.412.162.738.162 1.488 0 3.075-2.15 5.238-2.15 2.162-5.2 2.162h-1.75l2.25 2.25Z"/>
    </Icon>
  );
});

IconMaterialAutorenewW100Filled.displayName = 'AmauiIconMaterialAutorenewW100Filled';

export default IconMaterialAutorenewW100Filled;
