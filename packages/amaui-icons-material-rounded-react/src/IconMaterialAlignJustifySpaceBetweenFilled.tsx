import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceBetweenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenFilled'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 976q-17 0-28.5-11.5T800 936V776h-80q-17 0-28.5-11.5T680 736V416q0-17 11.5-28.5T720 376h80V216q0-17 11.5-28.5T840 176q17 0 28.5 11.5T880 216v720q0 17-11.5 28.5T840 976Zm-720 0q-17 0-28.5-11.5T80 936V216q0-17 11.5-28.5T120 176q17 0 28.5 11.5T160 216v160h80q17 0 28.5 11.5T280 416v320q0 17-11.5 28.5T240 776h-80v160q0 17-11.5 28.5T120 976Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenFilled.displayName = 'AmauiIconMaterialAlignJustifySpaceBetweenFilled';

export default IconMaterialAlignJustifySpaceBetweenFilled;
