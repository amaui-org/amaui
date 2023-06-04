import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVentilatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VentilatorW100'

      short_name='Ventilator'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M542 408h116q14 0 23-9t9-23v-36q0-14-9-23t-23-9H542q-14 0-23 9t-9 23v36q0 14 9 23t23 9ZM172 768q17 0 28.5-11.5T212 728q0-17-11.5-28.5T172 688q-17 0-28.5 11.5T132 728q0 17 11.5 28.5T172 768Zm308 136q-81 0-151.5-31T204 788q-8 4-15.5 6t-16.5 2q-29 0-48.5-19.5T104 728q0-16 6-29t17-22q-11-25-19-51.5T96 571q-1-6 2.5-11t9.5-6q6-1 10.5 3.5T124 568q4 26 11 49t17 46q5-2 10-2.5t10-.5q29 0 48.5 19.5T240 728q0 12-4 22.5T225 770q47 48 109 75.5T466 876V678q0-27-19.5-46.5T400 612q-56 0-95-39t-39-95q0-56 39-95t95-39h82v-4q0-25 17.5-42.5T542 280h116q25 0 42.5 17.5T718 340v4h32q6 0 10 4t4 10q0 6-4 10t-10 4h-32v4q0 25-17.5 42.5T658 436H542q-25 0-42.5-17.5T482 376v-4h-82q-45 0-75.5 30.5T294 478q0 45 30.5 75.5T400 584q39 0 66.5 27.5T494 678v198q107-4 191.5-64.5T811 656l-34-17q-3-1-4.5-3t-2-5q-.5-3-.5-5.5t1-5.5q1-3 3-4.5t5-2.5q3-1 5.5-.5t5.5 1.5l31 16q5-15 9-30.5t6-31.5q1-6 6-10.5t11-3.5q6 1 9.5 6t2.5 11q-3 19-7.5 37T847 643l32 15q3 1 4.5 3t2.5 5q1 3 .5 5.5T885 677q-1 3-3 4.5t-5 2q-3 .5-5.5.5t-5.5-1l-29-14q-45 105-141 170t-216 65Zm30-496V308v100ZM172 728Z"/>
    </Icon>
  );
});

IconMaterialVentilatorW100.displayName = 'AmauiIconMaterialVentilatorW100';

export default IconMaterialVentilatorW100;
