import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsFilled'

      short_name='Stars'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 18 4-3.05L16 18l-1.5-4.95 4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85Zm4 4q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialStarsFilled.displayName = 'AmauiIconMaterialStarsFilled';

export default IconMaterialStarsFilled;
