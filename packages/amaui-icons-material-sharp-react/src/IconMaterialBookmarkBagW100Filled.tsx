import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkBagW100Filled'

      short_name='BookmarkBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-428h32v29h42v-29h31v29h42v-29h32v-192h-38v-74H428v74h-38v192Zm66-192v-46h47v46h-47ZM252-198v-590h456v590l-228-98.33L252-198Z"/>
    </Icon>
  );
});

IconMaterialBookmarkBagW100Filled.displayName = 'AmauiIconMaterialBookmarkBagW100Filled';

export default IconMaterialBookmarkBagW100Filled;
