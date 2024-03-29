import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStars = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stars'

      short_name='Stars'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 18 4-3.05L16 18l-1.5-4.95 4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85Zm4 4q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialStars.displayName = 'AmauiIconMaterialStars';

export default IconMaterialStars;
