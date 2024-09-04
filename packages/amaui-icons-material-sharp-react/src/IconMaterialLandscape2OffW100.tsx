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
      <path d="M823-97 98-822l20-20 725 725-20 20ZM247-565q-38 0-65.5-27.22Q154-619.43 154-657q0-31 17.5-54.5T216-744l117 117q-9 27-32.5 44.5T247-565Zm118 244Zm238-148Zm262 262-46-46-138-372q-9-28-33.5-43.5T594-684q-29 0-53.5 16T507-624l-14 45-23-23 10-30q12-37 44-58.5t70.38-21.5Q632-712 664-691q32 21 44 57l157 427Zm-767-5 108.16-204.2q7.84-14.8 21.72-23.3Q241.75-448 259-448q18 0 33.1 9.37 15.1 9.38 21.9 26.63l19 44q9 19 33.06 17.43Q390.13-352.14 397-371l47-145 22 22-42 131q-7 19-23 30.5T364.61-321q-18.35 0-33.98-9.5Q315-340 307-357l-21-50q-8-17-27.5-17.5T230-408L128-212H98Z"/>
    </Icon>
  );
});

IconMaterialLandscape2OffW100.displayName = 'AmauiIconMaterialLandscape2OffW100';

export default IconMaterialLandscape2OffW100;
