import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchW100Filled'

      short_name='PersonSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11.2q-1.125 0-1.912-.788Q8.3 9.625 8.3 8.5t.788-1.912Q9.875 5.8 11 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm9.7 10-2.25-2.25q-.475.35-.975.5-.5.15-.975.15-1.3 0-2.2-.9-.9-.9-.9-2.2 0-1.3.9-2.2.9-.9 2.2-.9 1.3 0 2.2.9.9.9.9 2.2 0 .475-.15.975t-.5.975l2.25 2.25q.1.1.112.238.013.137-.112.262-.1.1-.25.1t-.25-.1Zm-4.2-2.3q1.025 0 1.713-.688.687-.687.687-1.712t-.687-1.713q-.688-.687-1.713-.687-1.025 0-1.712.687-.688.688-.688 1.713 0 1.025.688 1.712.687.688 1.712.688Zm-11.45-.7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.575.338-1.037.337-.463.912-.763 1.025-.5 2.788-.875 1.762-.375 3.787-.375-.35.675-.525 1.35-.175.675-.175 1.375 0 .4.063.8.062.4.187.825Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchW100Filled.displayName = 'AmauiIconMaterialPersonSearchW100Filled';

export default IconMaterialPersonSearchW100Filled;
