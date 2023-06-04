import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTerminalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TerminalW100'

      short_name='Terminal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-5.75-.5q-.1-.1-.1-.25t.1-.25L9.6 13l-2.35-2.35q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.25-.1t.25.1l2.3 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.3 2.325q-.1.1-.25.1t-.25-.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V8H4v9.2q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialTerminalW100.displayName = 'AmauiIconMaterialTerminalW100';

export default IconMaterialTerminalW100;
