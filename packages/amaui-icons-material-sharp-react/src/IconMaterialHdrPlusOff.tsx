import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOff'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800q-45 0-86 11t-77 32l-58-58q47-32 103-48.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 62-17 118t-49 103l-58-58q21-36 32.5-77t11.5-86q0-134-93-227t-227-93Zm0 207-60-60v-37q0-13 8.5-21.5T450-720q13 0 21.5 8.5T480-690v97Zm220-67v120q0 24-18 42t-42 18h-47l-73-73v-137q0-13 8.5-21.5T550-720h90q24 0 42 18t18 42ZM580-540h60v-120h-60v120ZM420-340v-40h-80v40h80Zm117-197ZM340-280v50q0 13-8.5 21.5T310-200q-13 0-21.5-8.5T280-230v-180q0-13 8.5-21.5T310-440h110q25 0 42.5 17.5T480-380v40q0 18-10.5 32.5T444-284l19 44q6 14-2.5 27T437-200q-8 0-15.5-4.5T411-217l-27-63h-44Zm-60-344 60 60v54q0 13-8.5 21.5T310-480q-13 0-21.5-8.5T280-510v-114Zm143 201ZM171-733l56 57q-32 42-49.5 90.5T160-480q0 134 93 227t227 93q57 0 106-17.5t91-49.5l56 56q-51 44-115.5 67.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-73 24-137.5T171-733ZM848-56q-11 11-28 11t-28-11L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOff.displayName = 'AmauiIconMaterialHdrPlusOff';

export default IconMaterialHdrPlusOff;
