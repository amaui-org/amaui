import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessTracker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessTracker'

      short_name='FitnessTracker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-80-48-159q-15-16-23.5-37t-8.5-44v-320q0-24 8.5-45t23.5-37l48-158h240l46 157q16 17 25 38t9 45v320q0 24-8.5 45T647-237L600-80H360Zm59-80h121l12-40H407l12 40Zm-19-120h160q17 0 28.5-11.5T600-320v-320q0-17-11.5-28.5T560-680H400q-17 0-28.5 11.5T360-640v320q0 17 11.5 28.5T400-280Zm7-480h145l-12-40H419l-12 40Zm72 560Zm0-560Z"/>
    </Icon>
  );
});

IconMaterialFitnessTracker.displayName = 'AmauiIconMaterialFitnessTracker';

export default IconMaterialFitnessTracker;
