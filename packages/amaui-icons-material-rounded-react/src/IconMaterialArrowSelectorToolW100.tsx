import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorToolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolW100'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.65 14.85 2.5-3.5h5.075L7.65 5.4Zm6.5 4.4q-.325.15-.65.025t-.475-.45l-2.9-6.225L8.3 15.125q-.325.45-.837.287-.513-.162-.513-.712V5.5q0-.475.425-.675.425-.2.8.075l7.375 5.8q.425.35.238.85-.188.5-.713.5h-3.35l2.85 6.075q.15.325.025.65t-.45.475Zm-4-7.9Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolW100.displayName = 'AmauiIconMaterialArrowSelectorToolW100';

export default IconMaterialArrowSelectorToolW100;
