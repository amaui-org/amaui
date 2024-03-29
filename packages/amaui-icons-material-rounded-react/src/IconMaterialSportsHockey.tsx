import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHockey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockey'

      short_name='SportsHockey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.425 0-.712-.288Q2 19.425 2 19v-2q0-.425.288-.712Q2.575 16 3 16h1v4Zm2 0v-4h4l.85-1.95 1.6 3.5-.85 1.9q-.125.275-.375.413Q9.975 20 9.7 20Zm15 0v-4h1q.425 0 .712.288.288.287.288.712v2q0 .425-.288.712Q21.425 20 21 20Zm-5.7 0q-.275 0-.525-.137-.25-.138-.375-.413l-6-13.125q-.425-.95.013-1.637Q7.85 4 8.925 4q.325 0 .637.212.313.213.438.488l2 4.5 2-4.5q.125-.275.438-.488Q14.75 4 15.1 4q1.05 0 1.488.688.437.687.012 1.637l-3 6.525L15 16h4v4Z"/>
    </Icon>
  );
});

IconMaterialSportsHockey.displayName = 'AmauiIconMaterialSportsHockey';

export default IconMaterialSportsHockey;
