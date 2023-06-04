import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.2 8q-.15 0-.25.1t-.1.25v8.3q0 .15.1.25t.25.1q0-.9.175-1.537l.175-.638V8.35q0-.15-.1-.25T10.2 8Zm3.25 3.2q.15-.1.338-.2.187-.1.362-.175V8.35q0-.15-.1-.25T13.8 8q-.15 0-.25.1t-.1.25ZM17 21.8q-2 0-3.4-1.4T12.2 17q0-2 1.4-3.4t3.4-1.4q2 0 3.4 1.4t1.4 3.4q0 2-1.4 3.4T17 21.8Zm.35-4.95V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.35q0 .15.05.275.05.125.175.25L18.4 18.9q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25Zm-6.6 2.85H7.8q-.65 0-1.075-.425Q6.3 18.85 6.3 18.2V6h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q0-.275.213-.488.212-.212.537-.212h4.5q.325 0 .538.212.212.213.212.488h3.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v4.225q-.15-.025-.35-.025H17V6H7v12.2q0 .3.25.55.25.25.55.25h2.7q.05.2.125.387l.125.313ZM7 6v13-.8Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100.displayName = 'AmauiIconMaterialAutoDeleteW100';

export default IconMaterialAutoDeleteW100;
