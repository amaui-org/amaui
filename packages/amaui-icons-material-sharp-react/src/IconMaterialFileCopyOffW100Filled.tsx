import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffW100Filled'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-281 292-784v-84h334l162 162v425Zm40 189L668-252H292v-376L92-828l20-20 736 736-20 20ZM612-692h150L612-842l150 150-150-150v150ZM132-92v-496h28v468h428v28H132Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffW100Filled.displayName = 'AmauiIconMaterialFileCopyOffW100Filled';

export default IconMaterialFileCopyOffW100Filled;
