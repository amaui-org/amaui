import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupW100Filled'

      short_name='Group'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.075 18.2v-1.3q0-.65.338-1.088.337-.437.912-.712 1.225-.575 2.413-.938 1.187-.362 3.037-.362 1.85 0 3.037.362 1.188.363 2.413.938.575.275.913.712.337.438.337 1.088v1.3Zm15.4 0v-1.3q0-.8-.275-1.5t-.775-1.2q.575.15 1.125.387.55.238 1.125.513t.912.75q.338.475.338 1.05v1.3Zm-8.7-7q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q8.65 5.8 9.775 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm3.75 0q.45-.575.7-1.262.25-.688.25-1.438t-.262-1.425Q13.95 6.4 13.525 5.8q1.125 0 1.913.788.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Z"/>
    </Icon>
  );
});

IconMaterialGroupW100Filled.displayName = 'AmauiIconMaterialGroupW100Filled';

export default IconMaterialGroupW100Filled;
