import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoVideocamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocamW100Filled'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M157 844V308h536v248l110-110v260L693 596v248H157Zm268-158 34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocamW100Filled.displayName = 'AmauiIconMaterialAutoVideocamW100Filled';

export default IconMaterialAutoVideocamW100Filled;
