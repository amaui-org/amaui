import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100Filled'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 44-44 19 20-44 44Zm-65-66-28-28v-83h28v111Zm0-211H523L210-826l-28-28h338l214 214v127ZM486-398 830-54H586v28h283v-28L84-839l-19 19 121 122v512h300v-212Zm220-228L506-826l200 200-200-200v200h200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100Filled.displayName = 'AmauiIconMaterialFileSaveOffW100Filled';

export default IconMaterialFileSaveOffW100Filled;
