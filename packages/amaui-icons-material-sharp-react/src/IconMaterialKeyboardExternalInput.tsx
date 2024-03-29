import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInput'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V376v400Zm-80 80V296h800v341q-17-16-37-27.5T800 590V376H160v400h324q-2 10-2.5 19.5T481 816q0 11 .5 20.5T484 856H80Zm240-200v80h174q8-23 20-43t28-37H320ZM200 536v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h28q12-8 25-14.5t27-11.5v-54h-80Zm120 0v44q10-2 19.5-3t20.5-1q11 0 20.5 1t19.5 3v-44h-80ZM200 416v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm40 560-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInput.displayName = 'AmauiIconMaterialKeyboardExternalInput';

export default IconMaterialKeyboardExternalInput;
