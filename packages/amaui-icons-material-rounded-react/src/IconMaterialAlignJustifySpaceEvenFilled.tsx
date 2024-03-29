import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceEvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEvenFilled'

      short_name='AlignJustifySpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 776q-17 0-28.5-11.5T560 736V416q0-17 11.5-28.5T600 376h40q17 0 28.5 11.5T680 416v320q0 17-11.5 28.5T640 776h-40Zm-280 0q-17 0-28.5-11.5T280 736V416q0-17 11.5-28.5T320 376h40q17 0 28.5 11.5T400 416v320q0 17-11.5 28.5T360 776h-40Zm520 200q-17 0-28.5-11.5T800 936V216q0-17 11.5-28.5T840 176q17 0 28.5 11.5T880 216v720q0 17-11.5 28.5T840 976Zm-720 0q-17 0-28.5-11.5T80 936V216q0-17 11.5-28.5T120 176q17 0 28.5 11.5T160 216v720q0 17-11.5 28.5T120 976Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEvenFilled.displayName = 'AmauiIconMaterialAlignJustifySpaceEvenFilled';

export default IconMaterialAlignJustifySpaceEvenFilled;
