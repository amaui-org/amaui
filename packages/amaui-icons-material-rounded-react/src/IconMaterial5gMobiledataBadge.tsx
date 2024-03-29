import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadge'

      short_name='5gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm0-80h720V296H120v560Zm0 0V296v560Zm440-80h120q33 0 56.5-23.5T760 696V576q0-17-11.5-28.5T720 536h-40q-17 0-28.5 11.5T640 576q0 17 11.5 28.5T680 616v80H560V456h200q0-33-23.5-56.5T680 376H560q-33 0-56.5 23.5T480 456v240q0 33 23.5 56.5T560 776Zm-200 0q33 0 56.5-23.5T440 696v-80q0-33-23.5-56.5T360 536h-80v-80h120q17 0 28.5-11.5T440 416q0-17-11.5-28.5T400 376H240q-17 0-28.5 11.5T200 416v160q0 17 11.5 28.5T240 616h120v80H240q-17 0-28.5 11.5T200 736q0 17 11.5 28.5T240 776h120Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadge.displayName = 'AmauiIconMaterial5gMobiledataBadge';

export default IconMaterial5gMobiledataBadge;
