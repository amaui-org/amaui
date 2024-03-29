import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightShelterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterFilled'

      short_name='NightShelter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Zm2-4.5h8v1q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V14q0-.825-.587-1.413Q15.825 12 15 12h-3q-.2 0-.35.15-.15.15-.15.35v3H8v-4q0-.2-.15-.35Q7.7 11 7.5 11q-.2 0-.35.15-.15.15-.15.35v6q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35ZM9.75 15q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z"/>
    </Icon>
  );
});

IconMaterialNightShelterFilled.displayName = 'AmauiIconMaterialNightShelterFilled';

export default IconMaterialNightShelterFilled;
