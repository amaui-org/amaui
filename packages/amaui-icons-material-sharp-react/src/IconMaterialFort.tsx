import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fort'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-5h-4v5Zm2-2h5v-5h8v5h5v-1.175l-2-2v-7.65L20.175 7h-4.35L17 8.175V12H7V8.175L8.175 7h-4.35L5 8.175v7.65l-2 2Zm9-6Z"/>
    </Icon>
  );
});

IconMaterialFort.displayName = 'AmauiIconMaterialFort';

export default IconMaterialFort;
