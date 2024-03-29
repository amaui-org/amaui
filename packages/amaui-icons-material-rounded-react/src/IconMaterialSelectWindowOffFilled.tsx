import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindowOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowOffFilled'

      short_name='SelectWindowOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-57 407-440H160v280h480v-161l80 80v81q0 33-23.5 56.5T640-80H160q-33 0-56.5-23.5T80-160v-360q0-33 23.5-56.5T160-600h80v-7L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm-71-298-85-85-160-160h165q33 0 56.5 23.5T720-520v80h80v-280H355L246-829q8-23 28.5-37t45.5-14h480q33 0 56.5 23.5T880-800v360q0 33-23.5 56.5T800-360h-80v5Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowOffFilled.displayName = 'AmauiIconMaterialSelectWindowOffFilled';

export default IconMaterialSelectWindowOffFilled;
