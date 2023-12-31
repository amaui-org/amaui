import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialButtonsAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAlt'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/>
    </Icon>
  );
});

IconMaterialButtonsAlt.displayName = 'AmauiIconMaterialButtonsAlt';

export default IconMaterialButtonsAlt;
