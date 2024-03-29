import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRate'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576ZM80 456V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v180q0 17-11.5 28.5T840 556q-17 0-28.5-11.5T800 516V336H160v120H80Zm80 440q-33 0-56.5-23.5T80 816V696h80v120h180q17 0 28.5 11.5T380 856q0 17-11.5 28.5T340 896H160Zm120-120q-11 0-21-5.5T244 754l-68-138h-55q-17 0-28.5-11.5T81 576q0-17 11.5-28.5T121 536h80q11 0 20.5 6t14.5 16l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l79 159q-21 2-39.5 9T481 586l-41-80-124 248q-5 11-15 16.5t-21 5.5Zm220 240q-25 0-42.5-17.5T440 956V824q0-8 1.5-15t3.5-14l48-127q9-23 29.5-37.5T568 616h72v-40q0-17 11.5-28.5T680 536q17 0 28.5 11.5T720 576v40h72q25 0 45.5 14.5T867 668l48 127q2 7 3.5 14t1.5 15v132q0 25-17.5 42.5T860 1016h-80q-25 0-42.5-17.5T720 956v-20q0-17 11.5-28.5T760 896q17 0 28.5 11.5T800 936h40V823l-48-127h-72v37l38 39q11 12 11 28.5T758 828q-11 11-28 11t-28-11l-22-22-22 22q-11 11-27.5 11.5T602 828q-11-11-11-28t11-28l38-39v-37h-72l-48 127v113h40q0-17 11.5-28.5T600 896q17 0 28.5 11.5T640 936v20q0 25-17.5 42.5T580 1016h-80Zm180-200Zm-78-44 38-39v-37 37l-38 39Zm156 0-38-39v-37 37l38 39Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRate.displayName = 'AmauiIconMaterialRespiratoryRate';

export default IconMaterialRespiratoryRate;
