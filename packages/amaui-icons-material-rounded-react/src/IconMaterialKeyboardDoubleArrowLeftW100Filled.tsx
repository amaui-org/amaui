import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeftW100Filled'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.025 16.85 12.7 12.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.325-4.325q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L13.175 12l4.35 4.35q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-5.95 0L6.75 12.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.325-4.325q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25L7.225 12l4.35 4.35q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeftW100Filled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowLeftW100Filled';

export default IconMaterialKeyboardDoubleArrowLeftW100Filled;
