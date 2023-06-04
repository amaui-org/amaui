import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardFilled'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 16.975q-.5.35-1.025.05-.525-.3-.525-.9v-8.25q0-.6.525-.888.525-.287 1.025.038l6.2 4.15q.45.3.45.825 0 .525-.45.825Zm10 0q-.5.35-1.025.05-.525-.3-.525-.9v-8.25q0-.6.525-.888.525-.287 1.025.038l6.2 4.15q.45.3.45.825 0 .525-.45.825Z"/>
    </Icon>
  );
});

IconMaterialFastForwardFilled.displayName = 'AmauiIconMaterialFastForwardFilled';

export default IconMaterialFastForwardFilled;
