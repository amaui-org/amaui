import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraFilled'

      short_name='LinkedCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.65 7q0-1.95-1.35-3.3-1.35-1.35-3.3-1.35V1q2.5 0 4.25 1.75T22 7ZM2 21V5h5.15L9 3h6v3q.825 0 1.413.588Q17 7.175 17 8h5v13ZM18 7q0-.825-.587-1.412Q16.825 5 16 5V3.65q1.375 0 2.337.975Q19.3 5.6 19.35 7Zm-6 10.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraFilled.displayName = 'AmauiIconMaterialLinkedCameraFilled';

export default IconMaterialLinkedCameraFilled;
