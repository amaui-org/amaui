import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100Filled'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.475 15.925q-.375.25-.762.025-.388-.225-.388-.675V11.25l-4.1-4.1Q5.1 7.025 5.1 6.9t.125-.25q.125-.125.25-.125t.25.125l11.6 11.6q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-4.2-4.2Zm4.45-2.875-5.6-5.6v-.1l6.3 4q.35.225.338.637-.013.413-.363.638Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100Filled.displayName = 'AmauiIconMaterialPlayDisabledW100Filled';

export default IconMaterialPlayDisabledW100Filled;
