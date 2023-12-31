import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-157 123-123-19-19-90 90v-204h-28v204l-90-90-19 19 123 123ZM586-26v-28h268v28H586ZM186-186v-668h334l214 214v127h-28v-113H506v-200H214v612h272v28H186Zm28-28v-612 612Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100.displayName = 'AmauiIconMaterialFileSaveW100';

export default IconMaterialFileSaveW100;
