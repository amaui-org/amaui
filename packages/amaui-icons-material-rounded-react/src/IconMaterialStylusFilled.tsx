import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusFilled'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M168-121q-21 5-36.5-10.5T121-168l35-170 182 182-170 35Zm235-84L205-403l413-413q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L403-205Z"/>
    </Icon>
  );
});

IconMaterialStylusFilled.displayName = 'AmauiIconMaterialStylusFilled';

export default IconMaterialStylusFilled;
