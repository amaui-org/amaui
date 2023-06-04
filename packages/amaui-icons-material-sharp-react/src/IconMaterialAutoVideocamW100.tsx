import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoVideocamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocamW100'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M157 844V308h536v248l110-110v260L693 596v248H157Zm28-28h480V336H185v480Zm0 0V336v480Zm240-130 34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocamW100.displayName = 'AmauiIconMaterialAutoVideocamW100';

export default IconMaterialAutoVideocamW100;
