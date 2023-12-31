import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightsAndHotelsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightsAndHotelsW100'

      short_name='FlightsAndHotels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-294q0-23 15.5-38.5T360-348q23 0 38.5 15.5T414-294q0 23-15.5 38.5T360-240q-23 0-38.5-15.5T306-294Zm174-54h268v282h-28v-106H240v106h-28v-322h28v188h240v-148Zm150-92L512-654 406-548l11 69-30 30-49-88-89-48 30-30 69 9 107-107-215-117 38-38 264 68 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l68 264-38 38Zm90 240v-120H508v120h212Zm-212 0v-120 120Z"/>
    </Icon>
  );
});

IconMaterialFlightsAndHotelsW100.displayName = 'AmauiIconMaterialFlightsAndHotelsW100';

export default IconMaterialFlightsAndHotelsW100;
