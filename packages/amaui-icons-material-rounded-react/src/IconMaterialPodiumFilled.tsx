import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumFilled'

      short_name='Podium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 276q0 33-23.5 56.5T420 356q-13 0-24-3.5T374 341q-24 8-38.5 29T321 416h473q18 0 29.5 14t9.5 32l-28 200q-2 15-13.5 24.5T765 696h-72l7-69q5-49-27.5-85T591 506H369q-49 0-81.5 36T260 627l7 69h-72q-15 0-26.5-9.5T155 662l-28-200q-2-18 9.5-32t29.5-14h74q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500 276ZM384 906h192q16 0 27-10t13-26l24-249q2-22-12-38.5T591 566H369q-23 0-37 16.5T320 621l24 249q2 16 13 26t27 10Z"/>
    </Icon>
  );
});

IconMaterialPodiumFilled.displayName = 'AmauiIconMaterialPodiumFilled';

export default IconMaterialPodiumFilled;
