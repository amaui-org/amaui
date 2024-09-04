import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlabSerif = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlabSerif'

      short_name='SlabSerif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M230-240h206v-70h-87l31-80h194l30 80h-85v70h211v-70h-40L528-720h-95L270-310h-40v70Zm175-215 68-177h7l68 177H405ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSlabSerif.displayName = 'AmauiIconMaterialSlabSerif';

export default IconMaterialSlabSerif;
