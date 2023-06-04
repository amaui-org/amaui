import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorTool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorTool'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13.75 9.975 11h4.25L8 6.1Zm7.15 7.625q-.575.275-1.15.063-.575-.213-.85-.788l-3-6.45-2.325 3.25q-.425.6-1.125.375-.7-.225-.7-.95V4.05q0-.625.562-.9.563-.275 1.063.125l10.1 7.95q.575.425.337 1.1-.237.675-.962.675h-4.2l2.975 6.375q.275.575.063 1.15-.213.575-.788.85ZM9.975 11Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorTool.displayName = 'AmauiIconMaterialArrowSelectorTool';

export default IconMaterialArrowSelectorTool;
