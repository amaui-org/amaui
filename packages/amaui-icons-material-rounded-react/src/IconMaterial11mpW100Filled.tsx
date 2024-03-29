import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial11mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='11mpW100Filled'

      short_name='11mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.1q.15 0 .25-.1t.1-.25V6.6q0-.275-.212-.488Q9.925 5.9 9.65 5.9H8.475q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h1.15v4.175q0 .125.1.225t.25.1Zm5 0q.15 0 .25-.1t.1-.25V6.6q0-.275-.212-.488-.213-.212-.488-.212h-1.175q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h1.15v4.175q0 .125.1.225t.25.1Zm-9.2 8.6q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm.95-1.6q.15 0 .25-.1t.1-.25V13.6h1.8v2.675q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V13.6h1.8v4.175q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V13.5q0-.275-.162-.438-.163-.162-.438-.162H7q-.275 0-.438.162-.162.163-.162.438v4.275q0 .125.1.225t.25.1Zm7.5 0q.15 0 .25-.1t.1-.25V16.6H17q.275 0 .438-.162.162-.163.162-.438v-2.5q0-.275-.162-.438-.163-.162-.438-.162h-2.5q-.25 0-.425.175t-.175.425v4.275q0 .125.1.225t.25.1Zm.35-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial11mpW100Filled.displayName = 'AmauiIconMaterial11mpW100Filled';

export default IconMaterial11mpW100Filled;
