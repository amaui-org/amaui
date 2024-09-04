import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTriangle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTriangle'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-120 440-760 440 760H40Zm139-80h602L480-720 179-200Zm261-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm40-120Z"/>
    </Icon>
  );
});

IconMaterialAddTriangle.displayName = 'AmauiIconMaterialAddTriangle';

export default IconMaterialAddTriangle;
