import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeFilled'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm680-400H700q-17 0-28.5 11.5T660 576q0 17 11.5 28.5T700 616h20v80H600V456h200q0-33-23.5-56.5T720 376H600q-33 0-56.5 23.5T520 456v240q0 33 23.5 56.5T600 776h120q33 0 56.5-23.5T800 696V536ZM320 656v80q0 17 11.5 28.5T360 776q17 0 28.5-11.5T400 736v-80h40q17 0 28.5-11.5T480 616q0-17-11.5-28.5T440 576h-40V416q0-17-11.5-28.5T360 376q-17 0-28.5 11.5T320 416v160h-80V416q0-17-11.5-28.5T200 376q-17 0-28.5 11.5T160 416v200q0 17 11.5 28.5T200 656h120Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeFilled.displayName = 'AmauiIconMaterial4gMobiledataBadgeFilled';

export default IconMaterial4gMobiledataBadgeFilled;
