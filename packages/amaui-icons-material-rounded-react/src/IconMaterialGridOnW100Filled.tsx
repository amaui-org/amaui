import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnW100Filled'

      short_name='GridOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.1 19.4q-.65 0-1.075-.425Q4.6 18.55 4.6 17.9V6.1q0-.65.425-1.075Q5.45 4.6 6.1 4.6h11.8q.65 0 1.075.425.425.425.425 1.075v11.8q0 .65-.425 1.075-.425.425-1.075.425Zm-.8-4.7v3.2q0 .3.25.55.25.25.55.25h3.2v-4Zm4.7 0v4h4v-4Zm4.7 4h3.2q.3 0 .55-.25.25-.25.25-.55v-3.2h-4ZM5.3 14h4v-4h-4Zm4.7 0h4v-4h-4Zm4.7 0h4v-4h-4ZM9.3 5.3H6.1q-.3 0-.55.25-.25.25-.25.55v3.2h4Zm.7 4h4v-4h-4Zm4.7 0h4V6.1q0-.3-.25-.55-.25-.25-.55-.25h-3.2Z"/>
    </Icon>
  );
});

IconMaterialGridOnW100Filled.displayName = 'AmauiIconMaterialGridOnW100Filled';

export default IconMaterialGridOnW100Filled;
