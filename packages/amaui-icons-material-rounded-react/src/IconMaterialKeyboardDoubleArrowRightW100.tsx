import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRightW100'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.475 16.85q-.125-.125-.125-.25t.125-.25l4.35-4.35-4.35-4.35q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L6.975 16.85q-.1.1-.237.112-.138.013-.263-.112Zm5.95 0q-.125-.125-.125-.25t.125-.25l4.35-4.35-4.35-4.35q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-4.325 4.325q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRightW100.displayName = 'AmauiIconMaterialKeyboardDoubleArrowRightW100';

export default IconMaterialKeyboardDoubleArrowRightW100;
