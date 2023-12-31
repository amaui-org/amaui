import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMap'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-40q97-82 144.5-152.5T672-523q0-91-58-144t-134-53q-76 0-134 53t-58 144q0 60 47.5 130.5T480-240Zm0-230q-21 0-35.5-14.5T430-520q0-21 14.5-35.5T480-570q21 0 35.5 14.5T530-520q0 21-14.5 35.5T480-470ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFileMap.displayName = 'AmauiIconMaterialFileMap';

export default IconMaterialFileMap;
