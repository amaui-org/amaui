import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Input'

      short_name='Input'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.5 16.5-1.4-1.45L12.175 13H2v-2h10.175L10.1 8.95l1.4-1.45L16 12ZM2 20v-5h2v3h16V6H4v3H2V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialInput.displayName = 'AmauiIconMaterialInput';

export default IconMaterialInput;
