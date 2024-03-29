import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConditionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConditionsFilled'

      short_name='Conditions'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 336q-33 0-56.5-23.5T320 256q0-33 23.5-56.5T400 176q33 0 56.5 23.5T480 256q0 33-23.5 56.5T400 336Zm260 480q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm96 52q-22 14-46 21t-50 7q-75 0-127.5-52.5T480 716q0-75 52.5-127.5T660 536q75 0 127.5 52.5T840 716q0 26-7 50t-21 46l80 80q11 11 11 28t-11 28q-11 11-28 11t-28-11l-80-80Zm-316-13q15 24 35.5 44t44.5 36v1q0 17-11.5 28.5T480 976q-17 0-28.5-11.5T440 936v-81Zm-80-119v200q0 17-11.5 28.5T320 976q-17 0-28.5-11.5T280 936V456q-50-4-99-11t-98-18q-17-4-27.5-19T50 376q5-17 20.5-25t32.5-4q73 17 147.5 23t149.5 6q75 0 149.5-6T697 347q17-4 32.5 4t20.5 25q5 17-5.5 32T717 427q-49 11-98 18t-99 11v41q-54 35-87 92.5T400 716v10q0 5 1 10h-41Z"/>
    </Icon>
  );
});

IconMaterialConditionsFilled.displayName = 'AmauiIconMaterialConditionsFilled';

export default IconMaterialConditionsFilled;
