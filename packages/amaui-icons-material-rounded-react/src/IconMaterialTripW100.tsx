import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripW100'

      short_name='Trip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-25 0-42.5-17.5T132-232v-376q0-25 17.5-42.5T192-668h180v-48q0-25 17.5-42.5T432-776h96q25 0 42.5 17.5T588-716v48h180q25 0 42.5 17.5T828-608v376q0 25-17.5 42.5T768-172H192Zm208-496h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm-108 28H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10h100v-440Zm348 440v-440H320v440h320Zm28-440v440h100q12 0 22-10t10-22v-376q0-12-10-22t-22-10H668ZM480-420Z"/>
    </Icon>
  );
});

IconMaterialTripW100.displayName = 'AmauiIconMaterialTripW100';

export default IconMaterialTripW100;
