import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpW100'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 11.25q-.125-.125-.125-.25t.125-.25l4.325-4.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l4.325 4.325q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125L12 6.9l-4.35 4.35q-.1.1-.237.113-.138.012-.263-.113Zm0 6q-.125-.125-.125-.25t.125-.25l4.325-4.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l4.325 4.325q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125L12 12.9l-4.35 4.35q-.1.1-.237.113-.138.012-.263-.113Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpW100.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUpW100';

export default IconMaterialKeyboardDoubleArrowUpW100;
