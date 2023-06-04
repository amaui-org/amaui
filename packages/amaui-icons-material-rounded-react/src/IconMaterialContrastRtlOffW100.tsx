import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastRtlOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOffW100'

      short_name='ContrastRtlOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M842 978 705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Zm-362-82q59 0 111-20t94-55L480 616v280Zm296-136-21-21q22-36 33.5-77t11.5-86q0-133-93.5-226.5T480 256v208L296 280q40-25 86.5-38.5T480 228q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 51-13.5 97.5T776 760Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOffW100.displayName = 'AmauiIconMaterialContrastRtlOffW100';

export default IconMaterialContrastRtlOffW100;
