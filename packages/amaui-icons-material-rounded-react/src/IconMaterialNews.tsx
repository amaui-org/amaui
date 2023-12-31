import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='News'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialNews.displayName = 'AmauiIconMaterialNews';

export default IconMaterialNews;
