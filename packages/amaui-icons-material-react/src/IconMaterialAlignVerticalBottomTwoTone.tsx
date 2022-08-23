import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomTwoTone'
      short_name='AlignVerticalBottom'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomTwoTone.displayName = 'AmauiIconMaterialAlignVerticalBottomTwoTone';

export default IconMaterialAlignVerticalBottomTwoTone;
