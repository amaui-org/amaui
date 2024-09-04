import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackAddW100'

      short_name='VideoCameraBackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M425-480ZM157-212v-248h28v220h480v-480H445v-28h248v248l110-110v260L693-460v248H157Zm102-122h332L489-470 389-346l-64-74-66 86Zm-22-226v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackAddW100.displayName = 'AmauiIconMaterialVideoCameraBackAddW100';

export default IconMaterialVideoCameraBackAddW100;
