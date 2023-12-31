import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 44-44 19 20-44 44Zm-65-66-28-28v-83h28v111ZM586-26v-28h244L214-670v456h272v28H186v-512L65-820l19-19L869-54v28H586Zm120-487h28v-127L520-854H182l28 28h296v200h200v113Zm-293 42Zm73-79Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100.displayName = 'AmauiIconMaterialFileSaveOffW100';

export default IconMaterialFileSaveOffW100;
