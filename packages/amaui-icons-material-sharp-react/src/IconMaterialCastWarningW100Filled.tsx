import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastWarningW100Filled'

      short_name='CastWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-616v-28h-28v28h28ZM132-276q26 0 45 19t19 45h-64v-64Zm0-128q80 0 136 55.886Q324-292.229 324-212h-28q0-67-48-114.5T132-376v-28Zm0-148q71 0 132.662 26.592 61.662 26.591 107.908 72.838 46.247 46.246 72.838 107.908Q472-283 472-212h-28q0-64.806-24.5-121.403Q395-390 352.5-432.5q-42.5-42.5-99.097-67Q196.806-524 132-524v-28Zm440 340q0-91-34.5-171t-94.318-140.02q-59.818-60.021-140-94.5Q223-652 132-652v-96h345q-2 7-2.5 13.5T473-720q-10 109 63 189.5T720-450q28.208 0 55.104-6.5T828-475v263H572Zm148-338q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-14-130h28v-108h-28v108Z"/>
    </Icon>
  );
});

IconMaterialCastWarningW100Filled.displayName = 'AmauiIconMaterialCastWarningW100Filled';

export default IconMaterialCastWarningW100Filled;
