import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize3Filled'

      short_name='PenSize3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M218 838q-17-17-17-42t17-42l440-440q17-18 42-17.5t42 17.5q17 17 17.5 42T742 398L302 838q-17 17-42 17.5T218 838Z"/>
    </Icon>
  );
});

IconMaterialPenSize3Filled.displayName = 'AmauiIconMaterialPenSize3Filled';

export default IconMaterialPenSize3Filled;
