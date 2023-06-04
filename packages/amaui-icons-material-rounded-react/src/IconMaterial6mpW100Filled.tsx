import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6mpW100Filled'

      short_name='6mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 11.1h2.3q.3 0 .5-.2t.2-.5V8.85q0-.3-.2-.5t-.5-.2h-2.3V6.6h2.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65q-.3 0-.5.2t-.2.5v3.8q0 .3.2.5t.5.2Zm0-.7V8.85h2.3v1.55ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm.95-1.6q.15 0 .25-.1t.1-.25V13.6h1.8v2.675q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V13.6h1.8v4.175q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V13.5q0-.275-.162-.438-.163-.162-.438-.162H7q-.275 0-.438.162-.162.163-.162.438v4.275q0 .125.1.225t.25.1Zm7.5 0q.15 0 .25-.1t.1-.25V16.6H17q.275 0 .438-.162.162-.163.162-.438v-2.5q0-.275-.162-.438-.163-.162-.438-.162h-2.5q-.25 0-.425.175t-.175.425v4.275q0 .125.1.225t.25.1Zm.35-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial6mpW100Filled.displayName = 'AmauiIconMaterial6mpW100Filled';

export default IconMaterial6mpW100Filled;
