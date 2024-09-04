import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkBagW100'

      short_name='BookmarkBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-428h32v29h42v-29h31v29h42v-29h32v-192h-38v-74H428v74h-38v192Zm66-192v-46h47v46h-47ZM252-198v-590h456v590l-228-98.33L252-198Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkBagW100.displayName = 'AmauiIconMaterialBookmarkBagW100';

export default IconMaterialBookmarkBagW100;
