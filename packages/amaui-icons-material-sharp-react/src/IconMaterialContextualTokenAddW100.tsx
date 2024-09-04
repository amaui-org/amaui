import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenAddW100'

      short_name='ContextualTokenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h410v28H160v480h640v-272h28v300H132Zm148-142h214v-66H280v66Zm0-186h214v-66H280v66Zm334 186h66v-158h-66v158ZM160-240v-480 480Zm560-360v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenAddW100.displayName = 'AmauiIconMaterialContextualTokenAddW100';

export default IconMaterialContextualTokenAddW100;
