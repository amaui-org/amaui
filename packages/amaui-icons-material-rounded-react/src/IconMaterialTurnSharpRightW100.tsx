import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightW100'

      short_name='TurnSharpRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19.7q-.15 0-.25-.1t-.1-.25v-4.7q0-.625.438-1.063.437-.437 1.062-.437h7.7q.35 0 .575-.225.225-.225.225-.575v-6.7l-2 2q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L19.85 7.15q.125.125.125.25t-.125.25q-.125.125-.262.125-.138 0-.263-.125l-1.975-2v6.7q0 .625-.437 1.062-.438.438-1.063.438h-7.7q-.35 0-.575.225-.225.225-.225.575v4.7q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightW100.displayName = 'AmauiIconMaterialTurnSharpRightW100';

export default IconMaterialTurnSharpRightW100;
