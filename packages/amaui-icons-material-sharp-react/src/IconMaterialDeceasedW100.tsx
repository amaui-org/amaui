import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeceasedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedW100'

      short_name='Deceased'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M458 886q-9-26.241-23-48.444-14-22.204-33-41.38Q383 777 361 763q-22-14-48-23 2 29 14 54t32 45q20 20 45 32t54 15Zm43 0q29-2 54.278-14t45.5-32Q621 820 633 794.5t14-54.5q-25.761 9-48.055 23t-41.119 33Q539 815 524.622 837.5 510.243 860 501 886Zm-21-320q63 0 106.5-43.5T630 416v-78l-70 59-80-109-80 109-70-59v78q0 63 43.5 106.5T480 566Zm-8 348q-78.333 0-133.167-54.833Q284 804.333 284 726v-22q61 13 110 50.5t72 89.5V594q-69-5-116.5-56T302 416V277l94 81 84-113 84 113 94-81v139q0 71-47.5 122T494 594v249q23-51 71.5-88.5T674 704v22q0 78.333-54.542 133.167Q564.917 914 487 914h-15Zm8-487Zm94 386Zm-188 0Z"/>
    </Icon>
  );
});

IconMaterialDeceasedW100.displayName = 'AmauiIconMaterialDeceasedW100';

export default IconMaterialDeceasedW100;
