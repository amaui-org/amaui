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
      <path d="M120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm340-160q-17 0-28.5-11.5T420 776V296q0-17 11.5-28.5T460 256h40q17 0 28.5 11.5T540 296v480q0 17-11.5 28.5T500 816h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEnd.displayName = 'AmauiIconMaterialAlignFlexEnd';

export default IconMaterialAlignFlexEnd;
