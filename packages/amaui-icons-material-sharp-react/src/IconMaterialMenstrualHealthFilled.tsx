import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenstrualHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthFilled'

      short_name='MenstrualHealth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 196v380q0 91 36 168t99 132q-26-38-40.5-83.5T160 696q0-74 30.5-154.5T292 355L80 196Zm400 37Q347 393 293.5 508.5T240 696q0 100 70 170t170 70q100 0 170-70t70-170q0-72-54-188.5T480 233Zm400-37L668 355q71 106 101.5 186.5T800 696q0 51-14.5 96.5T745 876q63-55 99-132t36-168V196Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthFilled.displayName = 'AmauiIconMaterialMenstrualHealthFilled';

export default IconMaterialMenstrualHealthFilled;
