import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEnd'

      short_name='AlignFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976v-80h800v80H80Zm340-160V256h120v560H420Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEnd.displayName = 'AmauiIconMaterialAlignFlexEnd';

export default IconMaterialAlignFlexEnd;
