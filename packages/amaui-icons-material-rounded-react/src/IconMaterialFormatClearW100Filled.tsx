import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearW100Filled'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.35 9.85-.525-.525L12.85 6.85H9.3l-.7-.7h9.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.875Zm6.6 10.1-7.625-7.65-2.3 5.425q-.05.1-.125.162-.075.063-.2.063-.2 0-.3-.162-.1-.163-.025-.338l2.425-5.675-7-6.975q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.15 15.15q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFormatClearW100Filled.displayName = 'AmauiIconMaterialFormatClearW100Filled';

export default IconMaterialFormatClearW100Filled;
