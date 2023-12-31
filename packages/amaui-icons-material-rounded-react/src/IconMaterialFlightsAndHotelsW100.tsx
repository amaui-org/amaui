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
      <path d="M306-294q0-23 15.5-38.5T360-348q23 0 38.5 15.5T414-294q0 23-15.5 38.5T360-240q-23 0-38.5-15.5T306-294ZM225.965-66Q220-66 216-70.025T212-80v-294q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v174h240v-118.4q0-12.58 8.625-21.09T510-348h178q26 0 43 17t17 43v208q0 5.95-4.035 9.975-4.035 4.025-10 4.025T724-70.025q-4-4.025-4-9.975v-92H240v92q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM512-654 406-548l9 58.921q1 5.079 0 9.079-1 4-5 8l-4 4q-8 8-17.5 6T374-473l-36-64-69-37q-8-4-9-12.5t5-14.5l8-8q2-2 14-5l60.723 8L455-713 267-815q-11-5-12-17t7-20l7-7q5-5 10.5-6.5t11.5.5l251 65 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l64 250q2 7 .5 13t-6.5 11l-4 4q-9 9-22 7t-19-13L512-654Zm208 454v-88q0-14-9-23t-23-9H508v120h212Zm-212 0v-120 120Z"/>
    </Icon>
  );
});

IconMaterialFlightsAndHotelsW100.displayName = 'AmauiIconMaterialFlightsAndHotelsW100';

export default IconMaterialFlightsAndHotelsW100;
