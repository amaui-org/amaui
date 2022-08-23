import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApartmentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentTwoTone'
      short_name='Apartment'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"/></g>
    </Icon>
  );
});

IconMaterialApartmentTwoTone.displayName = 'AmauiIconMaterialApartmentTwoTone';

export default IconMaterialApartmentTwoTone;
