import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V348h308l40 40h348v138h-28V416H160v400h323v28H132Zm613-163 20 19-154 154v42h42l154-154 20 20-162 162h-82v-81l162-162Zm82 81-82-81 64-64 82 82-64 63ZM160 416v428-428Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100.displayName = 'AmauiIconMaterialBookmarkManagerW100';

export default IconMaterialBookmarkManagerW100;
