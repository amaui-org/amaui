import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedMinus'

      short_name='ShutterSpeedMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M639-160q-17 0-28-11.5T600-200q0-17 11.5-28.5T640-240h240q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160H639ZM480-440Zm87-9 38 65q-8 7-15.5 14.5T576-354l-9-16q-6-10-17.5-10T532-370L430-192q-5 9-1 18.5t15 11.5q20 3 39.5 2.5T522-162q3 20 9.5 39.5T547-86q-17 3-33.5 4.5T480-80q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l30-30q11-11 27.5-11t28.5 12q11 11 11 27.5T790-694l-28 30q38 50 58.5 110T839-427q-20-5-41-9t-42-4v-20q0-8-6-14t-14-6H584q-11 0-17 10t0 21ZM399-840q-17 0-28-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H399Zm116 320h203q13 0 19-8.5t1-19.5q-20-46-53.5-82.5T606-690q-8-5-18.5-1.5T572-679l-75 129q-6 10 .5 20t17.5 10Zm-122 10q6 10 17 10t17-10l102-176q6-11 2-20.5T515-718q-48-7-96 4t-93 40q-8 5-10.5 15.5T318-639l75 129ZM228-400h147q11 0 17.5-10t.5-20L291-606q-6-11-16-12t-18 9q-29 40-44.5 87T201-424q1 10 8.5 17t18.5 7Zm126 210q8 5 18.5 1.5T388-201l75-129q6-10-.5-20T445-360H242q-13 0-19 8.5t-1 19.5q20 46 53.5 82.5T354-190Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedMinus.displayName = 'AmauiIconMaterialShutterSpeedMinus';

export default IconMaterialShutterSpeedMinus;
