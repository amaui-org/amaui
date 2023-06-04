import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighW100'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 13.35q-.15 0-.25-.1t-.1-.25V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5q0 .15-.1.25t-.25.1Zm-2.7 3q-.15 0-.25-.1t-.1-.25v-5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5q0 .15-.1.25t-.25.1Zm20-3q-.15 0-.25-.1t-.1-.25V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5q0 .15-.1.25t-.25.1Zm-2.7 3q-.15 0-.25-.1t-.1-.25v-5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5q0 .15-.1.25t-.25.1ZM8.55 20.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.9 3.3 8.55 3.3h6.9q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm-.8-3.05h8.5V6.35h-8.5Zm0-12h8.5V4.8q0-.35-.225-.575Q15.8 4 15.45 4h-6.9q-.35 0-.575.225-.225.225-.225.575Zm8.5 12.7h-8.5v.85q0 .35.225.575Q8.2 20 8.55 20h6.9q.35 0 .575-.225.225-.225.225-.575ZM7.75 4v1.65V4Zm0 16v-1.65V20Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighW100.displayName = 'AmauiIconMaterialEdgesensorHighW100';

export default IconMaterialEdgesensorHighW100;
