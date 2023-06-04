import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteW100'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 19.7q-.65 0-1.075-.425Q6.3 18.85 6.3 18.2V6h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q0-.3.225-.5t.525-.2h4.5q.3 0 .525.2.225.2.225.5h3.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v12.2q0 .65-.425 1.075-.425.425-1.075.425ZM7 6v12.2q0 .35.225.575Q7.45 19 7.8 19h8.4q.35 0 .575-.225Q17 18.55 17 18.2V6Zm3.05 10.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-8.3q0-.15-.1-.25T10.4 8q-.15 0-.25.1t-.1.25Zm3.2 0q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-8.3q0-.15-.1-.25T13.6 8q-.15 0-.25.1t-.1.25ZM7 6v12.2q0 .35.225.575Q7.45 19 7.8 19H7V6Z"/>
    </Icon>
  );
});

IconMaterialDeleteW100.displayName = 'AmauiIconMaterialDeleteW100';

export default IconMaterialDeleteW100;
