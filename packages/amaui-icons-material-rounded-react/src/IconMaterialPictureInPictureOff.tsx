import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOff'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-440h86q17 0 28.5-11.5T760-480v-160q0-17-11.5-28.5T720-680H480q-17 0-28.5 11.5T440-640v6l80 80v-46h160v80H554l80 80Zm237 237-71-71v-446H354l-80-80h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM383-463Zm194-34ZM790-57 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L54-792q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOff.displayName = 'AmauiIconMaterialPictureInPictureOff';

export default IconMaterialPictureInPictureOff;
