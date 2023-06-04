import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDownW100Filled'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.8q-.15 0-.275-.05-.125-.05-.25-.175L7.15 7.25q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L12 11.1l4.35-4.35q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25l-4.325 4.325q-.125.125-.25.175-.125.05-.275.05Zm0 5.95q-.15 0-.275-.05-.125-.05-.25-.175L7.15 13.2q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L12 17.05l4.35-4.35q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25l-4.325 4.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDownW100Filled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowDownW100Filled';

export default IconMaterialKeyboardDoubleArrowDownW100Filled;
