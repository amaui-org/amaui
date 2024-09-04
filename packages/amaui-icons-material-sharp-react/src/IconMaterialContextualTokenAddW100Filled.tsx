import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenAddW100Filled'

      short_name='ContextualTokenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-600v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM280-354h214v-66H280v66Zm0-186h214v-66H280v66ZM132-212v-536h416q-4 13-6 26.56-2 13.55-2 27.44 0 47 20 86t54 66v188h66v-154q13 4 26.5 6t27.5 2q26.13 0 49.56-6.5Q807-513 828-524v312H132Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenAddW100Filled.displayName = 'AmauiIconMaterialContextualTokenAddW100Filled';

export default IconMaterialContextualTokenAddW100Filled;
