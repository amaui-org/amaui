import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHevc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hevc'

      short_name='Hevc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15V9h1.5v2h1V9H7v6H5.5v-2.5h-1V15Zm14 0V9h4v2h-1.5v-.5h-1v3h1V13H21v2Zm-4 0-1-6h1.5l.75 4.5L15 9h1.5l-1 6Zm-5 0V9h3.5v1.5h-2v.5h2v1.5h-2v1h2V15Z"/>
    </Icon>
  );
});

IconMaterialHevc.displayName = 'AmauiIconMaterialHevc';

export default IconMaterialHevc;
