import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenW100Filled'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-354h214v-66H280v66Zm334 0h66v-252h-66v252ZM280-540h214v-66H280v66ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenW100Filled.displayName = 'AmauiIconMaterialContextualTokenW100Filled';

export default IconMaterialContextualTokenW100Filled;
