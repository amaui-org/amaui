import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTypeSpecimen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimen'

      short_name='TypeSpecimen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 14.5h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6Zm2.85-3.6 1.3-3.75h.1l1.3 3.75ZM6 18V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimen.displayName = 'AmauiIconMaterialTypeSpecimen';

export default IconMaterialTypeSpecimen;
