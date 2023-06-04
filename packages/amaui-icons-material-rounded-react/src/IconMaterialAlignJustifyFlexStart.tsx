import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStart'

      short_name='AlignJustifyFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 976q-17 0-28.5-11.5T80 936V216q0-17 11.5-28.5T120 176q17 0 28.5 11.5T160 216v720q0 17-11.5 28.5T120 976Zm440-200q-17 0-28.5-11.5T520 736V416q0-17 11.5-28.5T560 376h40q17 0 28.5 11.5T640 416v320q0 17-11.5 28.5T600 776h-40Zm-240 0q-17 0-28.5-11.5T280 736V416q0-17 11.5-28.5T320 376h40q17 0 28.5 11.5T400 416v320q0 17-11.5 28.5T360 776h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStart.displayName = 'AmauiIconMaterialAlignJustifyFlexStart';

export default IconMaterialAlignJustifyFlexStart;
