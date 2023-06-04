import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyDockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDockedFilled'

      short_name='MagnifyDocked'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm80-160h640V336H160v400Zm400-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDockedFilled.displayName = 'AmauiIconMaterialMagnifyDockedFilled';

export default IconMaterialMagnifyDockedFilled;
