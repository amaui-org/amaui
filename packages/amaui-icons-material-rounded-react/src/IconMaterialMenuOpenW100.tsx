import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenW100'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.125 17.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12.5 4.35 3.35 3.35q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-3.325-3.325q-.225-.225-.225-.525 0-.3.225-.525l3.325-3.325q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenW100.displayName = 'AmauiIconMaterialMenuOpenW100';

export default IconMaterialMenuOpenW100;
