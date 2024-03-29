import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightsStay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStay'

      short_name='NightsStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 21.5q.525-.275.938-.7.412-.425.712-.95.35.075.762.112.413.038.788.038 1.325 0 2.6-.425 1.275-.425 2.15-1.225-2.15-.725-3.825-2.112-1.675-1.388-2.737-3.226-1.063-1.837-1.438-3.987-.375-2.15.05-4.375-2.225.8-3.562 2.937Q4 9.725 4 12q-.525 0-1.037.113-.513.112-.963.337-.1-2.15.663-4.05.762-1.9 2.125-3.325Q6.15 3.65 8.012 2.825 9.875 2 12 2q-1.425 2.5-1.337 5.162.087 2.663 1.349 4.85 1.263 2.188 3.513 3.588T20.65 17q-1.4 2.375-3.675 3.688Q14.7 22 12.05 22q-.825 0-1.587-.113Q9.7 21.775 8.9 21.5ZM7 20H4q-1.25 0-2.125-.863Q1 18.275 1 17q0-1.25.875-2.125T4 14q.975 0 1.738.562Q6.5 15.125 6.8 16H7q.825 0 1.412.587Q9 17.175 9 18q0 .825-.588 1.413Q7.825 20 7 20Zm3.425-7.675Z"/>
    </Icon>
  );
});

IconMaterialNightsStay.displayName = 'AmauiIconMaterialNightsStay';

export default IconMaterialNightsStay;
