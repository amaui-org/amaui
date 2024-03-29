import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadge'

      short_name='LteMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm0-80h720V296H120v560Zm0 0V296v560Zm200-120q17 0 28.5-11.5T360 696q0-17-11.5-28.5T320 656h-80V456q0-17-11.5-28.5T200 416q-17 0-28.5 11.5T160 456v240q0 17 11.5 28.5T200 736h120Zm80-240v200q0 17 11.5 28.5T440 736q17 0 28.5-11.5T480 696V496h40q17 0 28.5-11.5T560 456q0-17-11.5-28.5T520 416H360q-17 0-28.5 11.5T320 456q0 17 11.5 28.5T360 496h40Zm240 240h120q17 0 28.5-11.5T800 696q0-17-11.5-28.5T760 656h-80v-40h40q17 0 28.5-11.5T760 576q0-17-11.5-28.5T720 536h-40v-40h80q17 0 28.5-11.5T800 456q0-17-11.5-28.5T760 416H640q-17 0-28.5 11.5T600 456v240q0 17 11.5 28.5T640 736Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadge.displayName = 'AmauiIconMaterialLteMobiledataBadge';

export default IconMaterialLteMobiledataBadge;
