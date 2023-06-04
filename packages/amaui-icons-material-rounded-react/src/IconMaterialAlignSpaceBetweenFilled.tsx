import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceBetweenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetweenFilled'

      short_name='AlignSpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h160v-80q0-17 11.5-28.5T320 776h320q17 0 28.5 11.5T680 816v80h160q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm200-600q-17 0-28.5-11.5T280 336v-80H120q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H680v80q0 17-11.5 28.5T640 376H320Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetweenFilled.displayName = 'AmauiIconMaterialAlignSpaceBetweenFilled';

export default IconMaterialAlignSpaceBetweenFilled;
