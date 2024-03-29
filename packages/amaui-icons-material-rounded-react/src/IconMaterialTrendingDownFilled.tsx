import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownFilled'

      short_name='TrendingDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 18q-.425 0-.712-.288Q16 17.425 16 17t.288-.712Q16.575 16 17 16h1.6l-5.2-5.15-3.3 3.3q-.125.125-.312.2-.188.075-.388.075t-.375-.075q-.175-.075-.325-.2L2.675 8.075Q2.4 7.8 2.4 7.4t.3-.7q.275-.275.7-.275.425 0 .7.275L9.4 12l3.3-3.3q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l5.9 5.9V13q0-.425.288-.713Q20.575 12 21 12t.712.287Q22 12.575 22 13v4q0 .425-.288.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownFilled.displayName = 'AmauiIconMaterialTrendingDownFilled';

export default IconMaterialTrendingDownFilled;
