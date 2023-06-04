import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProductivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductivityW100Filled'

      short_name='Productivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.075 14.95v-1.3q0-.65.337-1.088.338-.437.913-.712 1.225-.575 2.413-.938 1.187-.362 3.037-.362 1.075 0 1.9.138.825.137 1.55.362-.775.775-1.15 1.775-.375 1-.375 2.125Zm6.7-7q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.913q.787-.787 1.912-.787t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm6.45-2.7q0 1.125-.787 1.912-.788.788-1.913.788.5-.575.725-1.262.225-.688.225-1.438t-.25-1.425q-.25-.675-.7-1.275 1.125 0 1.913.787.787.788.787 1.913Zm1.25 13.475q-1.575 0-2.675-1.1-1.1-1.1-1.1-2.675 0-1.575 1.1-2.688 1.1-1.112 2.675-1.112 1.575 0 2.688 1.112 1.112 1.113 1.112 2.688 0 1.575-1.112 2.675-1.113 1.1-2.688 1.1Zm-.55-2.025 2.575-2.575-.5-.475-2.075 2.05-1.05-1.05-.5.5Z"/>
    </Icon>
  );
});

IconMaterialProductivityW100Filled.displayName = 'AmauiIconMaterialProductivityW100Filled';

export default IconMaterialProductivityW100Filled;
