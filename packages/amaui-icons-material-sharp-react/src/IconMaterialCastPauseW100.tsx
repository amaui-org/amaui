import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastPauseW100'

      short_name='CastPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M746-634h28v-128h-28v128Zm-80 0h28v-128h-28v128ZM480-480ZM132-276q26 0 45 19t19 45h-64v-64Zm0-128q80 0 136 55.886Q324-292.229 324-212h-28q0-68-48-115t-116-49v-28Zm0-148q71 0 132.662 26.592 61.662 26.591 107.908 72.838 46.247 46.246 72.838 107.908Q472-283 472-212h-28q0-64.806-24.5-121.403Q395-390 352.5-432.5q-42.5-42.5-99.097-67Q196.806-524 132-524v-28Zm696 340H572q0-7-.25-14t-.75-14h229v-223q8-2 14.5-5.5T828-475v263ZM132-652v-96h345q-2 7-2.5 13.5T473-720H160v69q-7-.5-14-.75t-14-.25Zm588 102q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialCastPauseW100.displayName = 'AmauiIconMaterialCastPauseW100';

export default IconMaterialCastPauseW100;
