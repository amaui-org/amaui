import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexNoWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrap'

      short_name='FlexNoWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 736V416q0-17 11.5-28.5T80 376h160q17 0 28.5 11.5T280 416v320q0 17-11.5 28.5T240 776H80q-17 0-28.5-11.5T40 736Zm320 0V416q0-17 11.5-28.5T400 376h160q17 0 28.5 11.5T600 416v320q0 17-11.5 28.5T560 776H400q-17 0-28.5-11.5T360 736Zm320 0V416q0-17 11.5-28.5T720 376h160q17 0 28.5 11.5T920 416v320q0 17-11.5 28.5T880 776H720q-17 0-28.5-11.5T680 736Zm-560-40h80V456h-80v240Zm640 0h80V456h-80v240Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrap.displayName = 'AmauiIconMaterialFlexNoWrap';

export default IconMaterialFlexNoWrap;
