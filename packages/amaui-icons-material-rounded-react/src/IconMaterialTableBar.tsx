import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBar'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.2 17-.975 2.425q-.125.275-.35.425-.225.15-.5.15-.5 0-.787-.413-.288-.412-.088-.862l1-2.475q.225-.575.725-.913Q8.725 15 9.35 15H11v-4.025Q7.175 10.85 4.588 9.85 2 8.85 2 7.5q0-1.45 2.925-2.475Q7.85 4 12 4q4.175 0 7.087 1.025Q22 6.05 22 7.5q0 1.35-2.587 2.35-2.588 1-6.413 1.125V15h1.65q.6 0 1.113.337.512.338.737.913l1 2.475q.1.225.062.45-.037.225-.162.412-.125.188-.325.3-.2.113-.45.113-.275 0-.5-.15-.225-.15-.35-.425L14.8 17ZM12 9q2.425 0 4.575-.425 2.15-.425 3.15-1.075-1-.65-3.15-1.075Q14.425 6 12 6q-2.425 0-4.575.425-2.15.425-3.15 1.075 1 .65 3.15 1.075Q9.575 9 12 9Zm0-1.5Z"/>
    </Icon>
  );
});

IconMaterialTableBar.displayName = 'AmauiIconMaterialTableBar';

export default IconMaterialTableBar;
