import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterFilled'

      short_name='AlignJustifyCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-17 0-28.5-11.5T440 936V216q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v720q0 17-11.5 28.5T480 976Zm160-200q-17 0-28.5-11.5T600 736V416q0-17 11.5-28.5T640 376h40q17 0 28.5 11.5T720 416v320q0 17-11.5 28.5T680 776h-40Zm-360 0q-17 0-28.5-11.5T240 736V416q0-17 11.5-28.5T280 376h40q17 0 28.5 11.5T360 416v320q0 17-11.5 28.5T320 776h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterFilled.displayName = 'AmauiIconMaterialAlignJustifyCenterFilled';

export default IconMaterialAlignJustifyCenterFilled;
