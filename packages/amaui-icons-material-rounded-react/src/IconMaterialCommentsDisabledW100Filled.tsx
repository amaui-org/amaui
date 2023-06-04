import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100Filled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V4.8q0-.125.012-.225.013-.1.038-.225L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125L15.7 16.7Zm15.9 1.2-4.55-4.55H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.55l-2.3-2.3H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.55l-2.3-2.3H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.45L6.1 3.3h13.1q.65 0 1.075.425.425.425.425 1.075Zm-8.35-4.55-.7-.7H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-5.35-3h2.35l-.7-.7H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100Filled.displayName = 'AmauiIconMaterialCommentsDisabledW100Filled';

export default IconMaterialCommentsDisabledW100Filled;
