import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapAndPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayW100Filled'

      short_name='TapAndPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.9 21.7V21h.3q.35 0 .575-.225Q17 20.55 17 20.2V5.35H7v6.75h-.7V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425Zm-9.6 0v-1.2q.5 0 .85.35t.35.85Zm4.05 0q-.125 0-.237-.1-.113-.1-.138-.25-.125-1.35-1.05-2.275Q8 18.15 6.65 18.025 6.5 18 6.4 17.9t-.1-.25q0-.15.113-.25.112-.1.237-.075 1.625.125 2.763 1.262 1.137 1.138 1.262 2.763.025.125-.075.237-.1.113-.25.113Zm3.2 0q-.15 0-.25-.1t-.1-.25q-.125-2.65-2.012-4.538Q9.3 14.925 6.65 14.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q2.95.125 5.038 2.212Q13.775 18.4 13.9 21.35q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayW100Filled.displayName = 'AmauiIconMaterialTapAndPlayW100Filled';

export default IconMaterialTapAndPlayW100Filled;
