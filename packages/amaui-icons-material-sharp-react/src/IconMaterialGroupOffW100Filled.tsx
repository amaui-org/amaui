import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupOffW100Filled'

      short_name='GroupOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-4.825-4.825v.725h-13.4v-1.3q0-.65.338-1.088.337-.437.912-.712 1.225-.575 2.413-.938 1.187-.362 3.037-.362 1.125 0 1.963.138.837.137 1.562.362l-3.125-3.125q-.1.025-.2.025h-.2q-1.125 0-1.912-.788-.788-.787-.788-1.912v-.2q0-.1.025-.2L2.25 3.25l.5-.5L21.8 21.8Zm-3.875-8.1q.575.15 1.125.387.55.238 1.125.513t.912.75q.338.475.338 1.05v1.225L18.2 15.4q-.15-.35-.337-.65-.188-.3-.438-.55Zm-3.7-3.275q.35-.525.55-1.15.2-.625.2-1.275 0-.75-.262-1.425-.263-.675-.688-1.275 1.125 0 1.913.788.787.787.787 1.912 0 1.025-.65 1.762-.65.738-1.6.913ZM12.3 9.5 8.775 5.975q.25-.075.487-.125.238-.05.513-.05 1.125 0 1.913.788.787.787.787 1.912 0 .275-.05.512-.05.238-.125.488Z"/>
    </Icon>
  );
});

IconMaterialGroupOffW100Filled.displayName = 'AmauiIconMaterialGroupOffW100Filled';

export default IconMaterialGroupOffW100Filled;
