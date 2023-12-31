import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagQuestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagQuestionW100Filled'

      short_name='PersonalBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M432-702q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20.4-13.8-34.2Q500.4-756 480-756q-20.4 0-34.2 13.8Q432-728.4 432-708v6Zm252 594q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-14-106h28v-6q0-12 6-19t14-15q14-12 22-25t8-31.367Q748-337 730.253-354.5 712.505-372 684.484-372 663-372 644.5-358.5T618-324l26 10q5-12 15.5-21t24.5-9q16.875 0 26.438 8.415Q720-327.171 720-310.341 720-298 713-290q-7 8-15 16-6 6-11.5 13T676-247.714q-3 4.714-4.5 11.214t-1.5 12.318V-214Zm14 70q8.462 0 14.231-5.769T704-164q0-8.462-5.769-14.231T684-184q-8.462 0-14.231 5.769T664-164q0 8.462 5.769 14.231T684-144Zm-432 12v-348q0-75 43-132.5T404-694v-14q0-31.667 21.789-53.833 21.79-22.167 54-22.167Q512-784 534-761.833q22 22.166 22 53.833v14q62 23 103 73.5T706-504h-28q-40 2-71 11.5T535-454H346v28h157q-28 30-47.5 72.536Q436-310.927 436-259q0 23 4.5 48t14.5 51q3 8 6.609 15.167 3.61 7.166 7.391 12.833H252Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagQuestionW100Filled.displayName = 'AmauiIconMaterialPersonalBagQuestionW100Filled';

export default IconMaterialPersonalBagQuestionW100Filled;
