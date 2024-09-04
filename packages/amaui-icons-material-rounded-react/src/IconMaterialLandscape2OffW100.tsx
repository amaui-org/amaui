import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2OffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2OffW100'

      short_name='Landscape2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M813-107 108-812q-4-4-4.5-9.5T108-832q5-5 10-5t10 5l705 705q4 4 4.5 9.5T833-107q-5 5-10 5t-10-5ZM247-565q-38 0-65.5-27.22Q154-619.43 154-657q0-31 17.5-54.5T216-744l117 117q-9 27-32.5 44.5T247-565Zm118 244Zm238-148Zm105-165 136 370q2 6-.5 10.5T836-247q-5 2-10.27-.02-5.27-2.01-7.73-8.98L681-625q-10-27-34-43t-53-16q-29 0-53.5 16T507-624l-7 23q-2 5-7 8t-10.5 1q-5.5-2-8.5-7t-1-11l7-22q12-37 43.5-58.5t70.79-21.5q37.71 0 69.21 21 31.5 21 44.5 57ZM206-416q8-15 21.88-23.5Q241.75-448 259-448q18 0 33.1 9.37 15.1 9.38 21.9 26.63l19 44q9 19 33.06 17.43Q390.13-352.14 397-371l47-145 22 22-42 131q-7 19-23 30.5T364.61-321q-18.35 0-33.98-9.5Q315-340 307-357l-21-50q-8-17-27.5-17.5T230-408l-99 189q-2 3-4.5 5t-6.36 2q-8.07 0-12.1-6-4.04-6-.04-13l98-185Z"/>
    </Icon>
  );
});

IconMaterialLandscape2OffW100.displayName = 'AmauiIconMaterialLandscape2OffW100';

export default IconMaterialLandscape2OffW100;
