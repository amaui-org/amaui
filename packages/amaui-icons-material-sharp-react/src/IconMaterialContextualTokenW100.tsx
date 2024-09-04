import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenW100'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-354h214v-66H280v66Zm334 0h66v-252h-66v252ZM280-540h214v-66H280v66ZM160-240h640v-480H160v480Zm-28 28v-536h696v536H132Zm28-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenW100.displayName = 'AmauiIconMaterialContextualTokenW100';

export default IconMaterialContextualTokenW100;
