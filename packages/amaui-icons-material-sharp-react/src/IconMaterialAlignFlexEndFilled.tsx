import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndFilled'

      short_name='AlignFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976v-80h800v80H80Zm340-160V256h120v560H420Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndFilled.displayName = 'AmauiIconMaterialAlignFlexEndFilled';

export default IconMaterialAlignFlexEndFilled;
