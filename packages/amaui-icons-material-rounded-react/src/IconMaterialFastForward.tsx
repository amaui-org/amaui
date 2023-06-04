import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForward'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 16.975q-.5.35-1.025.05-.525-.3-.525-.9v-8.25q0-.6.525-.9.525-.3 1.025.05l6.2 4.15q.45.3.45.825 0 .525-.45.825Zm10 0q-.5.35-1.025.05-.525-.3-.525-.9v-8.25q0-.6.525-.9.525-.3 1.025.05l6.2 4.15q.45.3.45.825 0 .525-.45.825ZM4.5 12Zm10 0Zm-10 2.25L7.9 12 4.5 9.75Zm10 0L17.9 12l-3.4-2.25Z"/>
    </Icon>
  );
});

IconMaterialFastForward.displayName = 'AmauiIconMaterialFastForward';

export default IconMaterialFastForward;
