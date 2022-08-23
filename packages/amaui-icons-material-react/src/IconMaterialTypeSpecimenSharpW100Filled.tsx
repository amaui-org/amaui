import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTypeSpecimenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenSharpW100Filled'
      short_name='TypeSpecimen'

      {...props}
    >
      <path d="M9.625 14.5H10.375L11.475 11.8H15.225L16.325 14.5H17.125L13.525 5.5H13.35H13.175ZM11.725 11.15 13.275 7.05H13.375L14.975 11.15ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenSharpW100Filled.displayName = 'AmauiIconMaterialTypeSpecimenSharpW100Filled';

export default IconMaterialTypeSpecimenSharpW100Filled;
