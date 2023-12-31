import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100Filled'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-26v-28h268v28H586Zm134-131L597-280l19-19 90 90v-204h28v204l90-90 19 19-123 123Zm-534-29v-668h334l214 214v127H486v327H186Zm320-440h200L506-826v200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100Filled.displayName = 'AmauiIconMaterialFileSaveW100Filled';

export default IconMaterialFileSaveW100Filled;
