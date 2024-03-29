import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOff'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-245-75-75h47v-400H353L245-828q8-24 28.5-38t46.5-14h480q33 0 56.5 23.5T880-800v480q0 26-14 46.5T828-245Zm-508 5q-33 0-56.5-23.5T240-320v-288L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240H320Zm0-80h208L320-528v208ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm265-343Zm114-111Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOff.displayName = 'AmauiIconMaterialAdGroupOff';

export default IconMaterialAdGroupOff;
