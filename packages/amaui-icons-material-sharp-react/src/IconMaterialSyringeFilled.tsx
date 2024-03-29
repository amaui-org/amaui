import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyringeFilled'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m268 374-43-43-40 40-56-57 136-136 58 57-42 40 43 43 141-141 57 57-56 55 62 62-140 140 56 57 140-141 61 60-141 141 55 56 141-141 117 117-84 86 189 188H808L676 782l-84 86-352-352-55 54-56-56 139-140Z"/>
    </Icon>
  );
});

IconMaterialSyringeFilled.displayName = 'AmauiIconMaterialSyringeFilled';

export default IconMaterialSyringeFilled;
