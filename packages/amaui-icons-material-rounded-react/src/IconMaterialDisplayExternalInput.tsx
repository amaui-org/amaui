import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplayExternalInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInput'

      short_name='DisplayExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M727 856H600q-17 0-28.5-11.5T560 816q0-17 11.5-28.5T600 776h127l-36-36q-11-11-10.5-28t11.5-28q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748 948q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l35-35Zm-527 80q-33 0-56.5-23.5T120 856V736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736v120h120q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H200Zm-40-480q-17 0-28.5-11.5T120 416V296q0-33 23.5-56.5T200 216h120q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296H200v120q0 17-11.5 28.5T160 456Zm640 0q-17 0-28.5-11.5T760 416V296H640q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h120q33 0 56.5 23.5T840 296v120q0 17-11.5 28.5T800 456Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInput.displayName = 'AmauiIconMaterialDisplayExternalInput';

export default IconMaterialDisplayExternalInput;
