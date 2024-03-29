import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSetMeal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMeal'

      short_name='SetMeal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 15V2h22v13Zm2-2h18V4H3Zm.075 5.5L3 17l17.975-.95.075 1.5ZM3 20.975v-1.5h18v1.5ZM3 13V4Zm7.25-1.5q1.95 0 3.638-.675 1.687-.675 2.912-1.975.15 1.025 1.1 1.588.95.562 2.1.562V6q-1.175 0-2.113.588-.937.587-1.087 1.612-1.35-1.35-2.988-2.025Q12.175 5.5 10.25 5.5q-2.15 0-3.975.812Q4.45 7.125 3.5 8.5q.95 1.375 2.775 2.188 1.825.812 3.975.812Z"/>
    </Icon>
  );
});

IconMaterialSetMeal.displayName = 'AmauiIconMaterialSetMeal';

export default IconMaterialSetMeal;
