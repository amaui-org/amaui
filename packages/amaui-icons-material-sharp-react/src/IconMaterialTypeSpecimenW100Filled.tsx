import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTypeSpecimenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenW100Filled'

      short_name='TypeSpecimen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.625 14.5h.75l1.1-2.7h3.75l1.1 2.7h.8l-3.6-9h-.35Zm2.1-3.35 1.55-4.1h.1l1.6 4.1ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenW100Filled.displayName = 'AmauiIconMaterialTypeSpecimenW100Filled';

export default IconMaterialTypeSpecimenW100Filled;
