import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToRegW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegW100Filled'

      short_name='HowToReg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.925 11.2q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q8.8 5.8 9.925 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm5.3 8.3-2.55-2.55.5-.5 2.05 2.05 5.05-5.05.5.5Zm-12-1.3v-1.3q0-.75.363-1.138.362-.387.887-.662 1.275-.65 2.4-.975Q8 13.8 9.925 13.8q.75 0 1.288.037.537.038.912.113l-3 3L10.4 18.2Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100Filled.displayName = 'AmauiIconMaterialHowToRegW100Filled';

export default IconMaterialHowToRegW100Filled;
