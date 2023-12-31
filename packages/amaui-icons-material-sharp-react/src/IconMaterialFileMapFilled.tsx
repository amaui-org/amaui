import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileMapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapFilled'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-120q97-82 144.5-152.5T672-523q0-91-58-144t-134-53q-76 0-134 53t-58 144q0 60 47.5 130.5T480-240Zm0-230q-21 0-35.5-14.5T430-520q0-21 14.5-35.5T480-570q21 0 35.5 14.5T530-520q0 21-14.5 35.5T480-470Z"/>
    </Icon>
  );
});

IconMaterialFileMapFilled.displayName = 'AmauiIconMaterialFileMapFilled';

export default IconMaterialFileMapFilled;
