import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataBadge'

      short_name='LtePlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 856V296v560Zm0 80q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v80q0 17-11.5 28.5T880 416q-17 0-28.5-11.5T840 376v-80H120v560h720v-80q0-17 11.5-28.5T880 736q17 0 28.5 11.5T920 776v80q0 33-23.5 56.5T840 936H120Zm160-200q17 0 28.5-11.5T320 696q0-17-11.5-28.5T280 656h-40V456q0-17-11.5-28.5T200 416q-17 0-28.5 11.5T160 456v240q0 17 11.5 28.5T200 736h80Zm100-240v200q0 17 11.5 28.5T420 736q17 0 28.5-11.5T460 696V496h20q17 0 28.5-11.5T520 456q0-17-11.5-28.5T480 416H360q-17 0-28.5 11.5T320 456q0 17 11.5 28.5T360 496h20Zm300 240q17 0 28.5-11.5T720 696q0-17-11.5-28.5T680 656h-40v-40h20q17 0 28.5-11.5T700 576q0-17-11.5-28.5T660 536h-20v-40h40q17 0 28.5-11.5T720 456q0-17-11.5-28.5T680 416h-80q-17 0-28.5 11.5T560 456v240q0 17 11.5 28.5T600 736h80Zm130-130v20q0 13 8.5 21.5T840 656q13 0 21.5-8.5T870 626v-20h20q13 0 21.5-8.5T920 576q0-13-8.5-21.5T890 546h-20v-20q0-13-8.5-21.5T840 496q-13 0-21.5 8.5T810 526v20h-20q-13 0-21.5 8.5T760 576q0 13 8.5 21.5T790 606h20Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataBadge.displayName = 'AmauiIconMaterialLtePlusMobiledataBadge';

export default IconMaterialLtePlusMobiledataBadge;
