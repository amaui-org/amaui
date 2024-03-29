import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSuperscriptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptFilled'

      short_name='Superscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 9V6h3V5h-3V4h4v3h-3v1h3v1ZM5.875 20l4.625-7.275L6.2 6h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 20H15.45l-3.4-5.425h-.1L8.55 20Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptFilled.displayName = 'AmauiIconMaterialSuperscriptFilled';

export default IconMaterialSuperscriptFilled;
