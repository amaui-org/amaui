import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutofpsSelectSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelectSharp'
      short_name='AutofpsSelect'

      {...props}
    >
      <path d="M10.95 9.2 11.95 6.3H12.05L13.05 9.2ZM12 15Q9.5 15 7.75 13.25Q6 11.5 6 9Q6 6.5 7.75 4.75Q9.5 3 12 3Q14.5 3 16.25 4.75Q18 6.5 18 9Q18 11.5 16.25 13.25Q14.5 15 12 15ZM8.75 12H9.95L10.6 10.2H13.4L14.05 12H15.25L12.6 5H11.35ZM3 22V17H5V22ZM7 22V17H9V22ZM11 22V17H13V22ZM15 22V17H21V22Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelectSharp.displayName = 'AmauiIconMaterialAutofpsSelectSharp';

export default IconMaterialAutofpsSelectSharp;
