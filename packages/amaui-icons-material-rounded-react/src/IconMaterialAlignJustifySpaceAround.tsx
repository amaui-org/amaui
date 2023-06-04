import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceAround = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceAround'

      short_name='AlignJustifySpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 776q-17 0-28.5-11.5T600 736V416q0-17 11.5-28.5T640 376h40q17 0 28.5 11.5T720 416v320q0 17-11.5 28.5T680 776h-40Zm-360 0q-17 0-28.5-11.5T240 736V416q0-17 11.5-28.5T280 376h40q17 0 28.5 11.5T360 416v320q0 17-11.5 28.5T320 776h-40Zm560 200q-17 0-28.5-11.5T800 936V216q0-17 11.5-28.5T840 176q17 0 28.5 11.5T880 216v720q0 17-11.5 28.5T840 976Zm-720 0q-17 0-28.5-11.5T80 936V216q0-17 11.5-28.5T120 176q17 0 28.5 11.5T160 216v720q0 17-11.5 28.5T120 976Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceAround.displayName = 'AmauiIconMaterialAlignJustifySpaceAround';

export default IconMaterialAlignJustifySpaceAround;
