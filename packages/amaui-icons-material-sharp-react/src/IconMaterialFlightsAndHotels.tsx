import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightsAndHotels = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightsAndHotels'

      short_name='FlightsAndHotels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320q0-33 23.5-56.5T360-400q33 0 56.5 23.5T440-320q0 33-23.5 56.5T360-240q-33 0-56.5-23.5T280-320Zm200-80h320v360h-80v-80H240v80h-80v-400h80v240h240v-200Zm150-40L512-654 406-548l10 68-30 30-47-88-88-48 30-30 68 9 106-106-215-117 38-38 264 68 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l68 264-38 38Zm90 240v-120H560v120h160Zm-160 0v-120 120Z"/>
    </Icon>
  );
});

IconMaterialFlightsAndHotels.displayName = 'AmauiIconMaterialFlightsAndHotels';

export default IconMaterialFlightsAndHotels;
