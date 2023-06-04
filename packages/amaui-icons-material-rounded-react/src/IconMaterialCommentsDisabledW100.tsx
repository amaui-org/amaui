import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.55 22.05q-.125.125-.25.125t-.25-.125L15.7 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V4.8q0-.125.012-.225.013-.1.038-.225L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262Zm-.85-4.15L18.8 16H20V4.8q0-.35-.225-.575Q19.55 4 19.2 4H6.8l-.7-.7h13.1q.65 0 1.075.425.425.425.425 1.075ZM4.8 16H15l-2.65-2.65H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.65l-2.3-2.3H7q-.15 0-.25-.112-.1-.113-.1-.238 0-.15.1-.25t.25-.1h1.65L4 5v10.2q0 .35.225.575Q4.45 16 4.8 16Zm11.35-2.65-.7-.7H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-3-3-.7-.7H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-3-3-.7-.7H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM9.5 10.5Zm3.9.1Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100.displayName = 'AmauiIconMaterialCommentsDisabledW100';

export default IconMaterialCommentsDisabledW100;
