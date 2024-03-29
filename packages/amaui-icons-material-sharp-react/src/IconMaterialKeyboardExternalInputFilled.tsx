import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInputFilled'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 536v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80ZM200 416v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm40 560-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM80 856V296h800v341q-26-23-56.5-37.5T760 580v-44h-80v44q-11 2-20.5 4t-19.5 6v-54h-80v80h28q-13 8-24 18.5T542 656H320v80h174q-7 19-10 39t-3 41q0 11 .5 20.5T484 856H80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputFilled.displayName = 'AmauiIconMaterialKeyboardExternalInputFilled';

export default IconMaterialKeyboardExternalInputFilled;
