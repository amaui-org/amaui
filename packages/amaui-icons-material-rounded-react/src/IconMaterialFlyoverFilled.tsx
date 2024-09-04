import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlyoverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlyoverFilled'

      short_name='Flyover'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-531-20 4-20 4q-15 4-27.5-5.5T80-554q0-18 11.5-32.5T121-605q89-19 178.5-27t180.5-8q91 0 181 8t179 27q18 4 29 18.5t11 32.5q0 16-12 25.5t-27 6.5l-20-4q-10-2-21-4v90q0 17-11.5 28.5T760-400q-17 0-28.5-11.5T720-440v-104q-60-8-120-12t-120-4q-60 0-120 3.5T240-545v105q0 17-11.5 28.5T200-400q-17 0-28.5-11.5T160-440v-91Zm320-190q-23 0-45.5.5T389-718q-19 1-32-13t-10-33l7-43q2-14 13.5-23.5T394-840h172q15 0 26.5 9.5T606-807l7 43q3 19-10 33t-32 13q-23-2-45.5-2.5T480-721Zm0 441q-17 0-28.5 11.5T440-240v120H287q-19 0-30.5-14.5T248-167l45-273q2-14 12.5-23t24.5-11q28-3 55-5t55-3v82q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-82q28 2 55 3.5t55 4.5q14 2 24.5 11t12.5 23l45 273q3 18-8.5 32.5T673-120H520v-120q0-17-11.5-28.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialFlyoverFilled.displayName = 'AmauiIconMaterialFlyoverFilled';

export default IconMaterialFlyoverFilled;
