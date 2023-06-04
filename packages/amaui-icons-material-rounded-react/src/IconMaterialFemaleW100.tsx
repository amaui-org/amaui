import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFemaleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleW100'

      short_name='Female'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.35q-1.9-.175-3.2-1.563Q7.15 11.4 7.15 9.5q0-2.025 1.412-3.438Q9.975 4.65 12 4.65q2.025 0 3.438 1.412Q16.85 7.475 16.85 9.5q0 1.9-1.3 3.287-1.3 1.388-3.2 1.563v3.3H14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65V20q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.65H10q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65Zm.35-.7q1.725 0 2.938-1.212Q16.15 11.225 16.15 9.5t-1.212-2.938Q13.725 5.35 12 5.35T9.062 6.562Q7.85 7.775 7.85 9.5t1.212 2.938Q10.275 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialFemaleW100.displayName = 'AmauiIconMaterialFemaleW100';

export default IconMaterialFemaleW100;
