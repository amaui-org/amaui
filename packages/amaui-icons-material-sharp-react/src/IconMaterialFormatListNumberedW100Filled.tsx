import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumberedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedW100Filled'

      short_name='FormatListNumbered'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 19.85v-.7h2v-.8h-1v-.7h1v-.8h-2v-.7h2.7v3.7Zm5.5-1.5v-.7h11.7v.7Zm-5.5-4.5v-.7l1.85-2.3H3.4v-.7h2.7v.7l-1.85 2.3H6.1v.7Zm5.5-1.5v-.7h11.7v.7Zm-4.5-4.5v-3h-1v-.7h1.7v3.7Zm4.5-1.5v-.7h11.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedW100Filled.displayName = 'AmauiIconMaterialFormatListNumberedW100Filled';

export default IconMaterialFormatListNumberedW100Filled;
