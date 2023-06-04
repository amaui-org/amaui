import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial50mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='50mpW100'

      short_name='50mp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M516 540h148V332H516v208Zm28-28V360h92v152h-92ZM256 820h28V640h72v120h28V640h72v180h28V612H256v208Zm300 0h28v-60h120V612H556v208Zm28-88v-92h92v92h-92ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Zm76 244h148V422H304v-62h120v-28H276v118h120v62H276v28Z"/>
    </Icon>
  );
});

IconMaterial50mpW100.displayName = 'AmauiIconMaterial50mpW100';

export default IconMaterial50mpW100;
