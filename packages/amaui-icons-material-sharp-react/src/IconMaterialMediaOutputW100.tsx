import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaOutputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputW100'

      short_name='MediaOutput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-520ZM132-212v-616h428v178q-7 2-14.119 3.447Q538.763-645.105 532-643v-157H160v560h152v28H132Zm180-93v-29q-27-11-44.5-35T250-424q0-40 28-68t68-28q5 0 8.5.5t8.5 1.5q5-6 9.167-12.531Q376.333-537.062 381-543q-8-2-16.75-3.5T346-548q-51.371 0-87.686 36.314Q222-475.371 222-424q0 43 25.5 75.5T312-305Zm34.118-315Q367-620 381.5-634.618q14.5-14.617 14.5-35.5Q396-691 381.382-705.5q-14.617-14.5-35.5-14.5Q325-720 310.5-705.382q-14.5 14.617-14.5 35.5Q296-649 310.618-634.5q14.617 14.5 35.5 14.5ZM508-132h-96v-216q0-86.667 60.735-147.333Q533.471-556 620.235-556 707-556 767.5-495.333 828-434.667 828-348v216h-96v-168h68v-48q0-75-52.5-127.5T620-528q-75 0-127.5 52.5T440-348v48h68v168Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputW100.displayName = 'AmauiIconMaterialMediaOutputW100';

export default IconMaterialMediaOutputW100;
