import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftW100Filled'

      short_name='TurnSharpLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 19.7q-.15 0-.25-.1t-.1-.25v-4.7q0-.35-.225-.575-.225-.225-.575-.225h-7.7q-.625 0-1.062-.438-.438-.437-.438-1.062v-6.7l-2 2q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175Q6.85 4.6 7 4.6q.15 0 .275.05.125.05.25.175L9.85 7.15q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2-2v6.7q0 .35.225.575.225.225.575.225h7.7q.625 0 1.063.437.437.438.437 1.063v4.7q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftW100Filled.displayName = 'AmauiIconMaterialTurnSharpLeftW100Filled';

export default IconMaterialTurnSharpLeftW100Filled;
