import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stylus'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/>
    </Icon>
  );
});

IconMaterialStylus.displayName = 'AmauiIconMaterialStylus';

export default IconMaterialStylus;
