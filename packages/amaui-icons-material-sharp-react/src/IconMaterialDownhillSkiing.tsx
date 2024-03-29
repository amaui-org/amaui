import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownhillSkiing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownhillSkiing'

      short_name='DownhillSkiing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 6.5q-.825 0-1.412-.588Q14.5 5.325 14.5 4.5t.588-1.413Q15.675 2.5 16.5 2.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588Zm2 16.5q-.65 0-1.262-.1-.613-.1-1.188-.3L2 17.475l.5-1.425 6.9 2.525 1.725-4.45L7.55 10.4q-.275-.3-.412-.662Q7 9.375 7 9q0-.5.25-.975t.75-.75l3.475-2q.25-.15.513-.213Q12.25 5 12.525 5q.625 0 1.15.362.525.363.725 1.013l.325 1.075q.325 1.075 1.063 1.9.737.825 1.762 1.25l.525-1.6 1.425.45-1.125 3.45q-1.85-.3-3.275-1.45Q13.675 10.3 13 8.6l-2.525 1.45L13.5 13.5l-2.225 5.75 3.1 1.125 2.1-6.425q.35.125.7.225t.725.175l-2.125 6.55.775.275q.45.15.938.238.487.087 1.012.087.65 0 1.238-.125.587-.125 1.137-.375L22 22.125q-.8.425-1.675.65Q19.45 23 18.5 23Z"/>
    </Icon>
  );
});

IconMaterialDownhillSkiing.displayName = 'AmauiIconMaterialDownhillSkiing';

export default IconMaterialDownhillSkiing;
