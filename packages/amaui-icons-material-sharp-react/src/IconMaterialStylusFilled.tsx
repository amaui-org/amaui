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
      <path d="m338-156-230 48 48-230 182 182Zm65-49L205-403l470-470 198 198-470 470Z"/>
    </Icon>
  );
});

IconMaterialStylusFilled.displayName = 'AmauiIconMaterialStylusFilled';

export default IconMaterialStylusFilled;
