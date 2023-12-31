import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Colors'

      short_name='Colors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-93 53-433l277-276-106-106 62-65 447 447L393-93Zm0-553L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l42-54 44 54q16 23 30 47t14 51q0 37-26 62.5T792-120Z"/>
    </Icon>
  );
});

IconMaterialColors.displayName = 'AmauiIconMaterialColors';

export default IconMaterialColors;
