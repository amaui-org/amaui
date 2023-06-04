import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceBetween = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetween'

      short_name='AlignSpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 376V256H80v-80h800v80H680v120H280ZM80 976v-80h200V776h400v120h200v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetween.displayName = 'AmauiIconMaterialAlignSpaceBetween';

export default IconMaterialAlignSpaceBetween;
