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
      <path d="M15.225 19.2q-.15 0-.275-.05-.125-.05-.25-.175L12.925 17.2q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l1.8 1.8 4.8-4.8q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-4.775 4.775q-.125.125-.25.175-.125.05-.275.05Zm-5.3-8q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q8.8 5.8 9.925 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.75.363-1.138.362-.387.887-.662 1.275-.65 2.4-.975Q8 13.8 9.925 13.8q.75 0 1.288.037.537.038.912.113l-2.5 2.5q-.2.2-.2.488 0 .287.2.487l.775.775Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100Filled.displayName = 'AmauiIconMaterialHowToRegW100Filled';

export default IconMaterialHowToRegW100Filled;
