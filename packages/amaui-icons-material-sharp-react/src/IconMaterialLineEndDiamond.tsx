import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamond'

      short_name='LineEndDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16.175 19.175 12 15 7.825 10.825 12ZM15 19l-6-6H2v-2h7l6-6 7 7Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamond.displayName = 'AmauiIconMaterialLineEndDiamond';

export default IconMaterialLineEndDiamond;
