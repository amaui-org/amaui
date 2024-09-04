import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryOffW100Filled'

      short_name='HistoryOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m744-325-20-21q17-30 25.5-63.5T758-480q0-117-81.5-198.5T478-760q-35 0-67.5 8.5T348-727l-20-21q35-20 72.5-30t77.5-10q64 0 120 24t98 66q42 42 66 98t24 120q0 42-11 81.5T744-325ZM495-578l-28-29v-73h28v102ZM828-92 676-244q-41 34-91 53t-107 19q-117 0-204-76T173-440h28q17 103 94.5 171.5T478-200q51 0 96.5-17t81.5-47L280-640h-58v-58L92-828l20-20 736 736-20 20Z"/>
    </Icon>
  );
});

IconMaterialHistoryOffW100Filled.displayName = 'AmauiIconMaterialHistoryOffW100Filled';

export default IconMaterialHistoryOffW100Filled;
