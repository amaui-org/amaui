import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPedalBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeFilled'

      short_name='PedalBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-2.125 0-3.562-1.438Q0 17.125 0 15t1.463-3.562Q2.925 10 5 10q1.925 0 3.238 1.15Q9.55 12.3 9.9 14h.65l-1.8-5H8q-.425 0-.713-.288Q7 8.425 7 8t.287-.713Q7.575 7 8 7h3q.425 0 .713.287Q12 7.575 12 8t-.287.712Q11.425 9 11 9h-.1l.35 1h4.8L14.6 6H13q-.425 0-.712-.287Q12 5.425 12 5t.288-.713Q12.575 4 13 4h1.6q.65 0 1.163.35.512.35.737.95l1.7 4.65h.8q2.075 0 3.538 1.462Q24 12.875 24 14.95q0 2.1-1.45 3.575T19 20q-1.8 0-3.162-1.125Q14.475 17.75 14.1 16H9.9q-.35 1.725-1.7 2.863Q6.85 20 5 20Zm7.7-6h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Zm6.25 1q.375-.125.563-.512.187-.388.037-.788L18.9 12l-1.85.7.6 1.7q.125.375.513.55.387.175.787.05ZM6 16h1.8v-2H6q-.425 0-.713.287Q5 14.575 5 15t.287.712Q5.575 16 6 16Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeFilled.displayName = 'AmauiIconMaterialPedalBikeFilled';

export default IconMaterialPedalBikeFilled;
