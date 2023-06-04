import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFormatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatW100'

      short_name='TextFormat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.875-7.2h4.2l-2-5.5h-.1ZM8.35 14.7q-.225 0-.313-.138-.087-.137-.012-.337l3.525-9.3q.05-.125.188-.225.137-.1.287-.1.15 0 .287.1.138.1.188.225l3.45 9.3q.075.2-.025.337-.1.138-.325.138-.1 0-.175-.05-.075-.05-.125-.15l-.975-2.65h-4.7L8.65 14.5q-.05.1-.125.15-.075.05-.175.05Z"/>
    </Icon>
  );
});

IconMaterialTextFormatW100.displayName = 'AmauiIconMaterialTextFormatW100';

export default IconMaterialTextFormatW100;
