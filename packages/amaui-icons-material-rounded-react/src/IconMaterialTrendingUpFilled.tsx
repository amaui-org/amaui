import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpFilled'

      short_name='TrendingUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 17.3q-.275-.275-.275-.688 0-.412.275-.712l6-6.05q.15-.125.325-.2.175-.075.375-.075t.388.075q.187.075.312.2l3.3 3.3L18.6 8H17q-.425 0-.712-.287Q16 7.425 16 7t.288-.713Q16.575 6 17 6h4q.425 0 .712.287Q22 6.575 22 7v4q0 .425-.288.712Q21.425 12 21 12t-.712-.288Q20 11.425 20 11V9.4l-5.9 5.9q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212L9.4 12l-5.325 5.325Q3.8 17.6 3.4 17.6t-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpFilled.displayName = 'AmauiIconMaterialTrendingUpFilled';

export default IconMaterialTrendingUpFilled;
