import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknown5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown5W100'

      short_name='Unknown5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-480q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h240q5.95 0 9.975 4.035 4.025 4.035 4.025 10T475.975-484q-4.025 4-9.975 4H226Zm254-320q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4 72.443 0 135.721 27.5Q679-773 726-726q47 47 74.5 110.379Q828-552.242 828-479.684 828-408 800.5-344.5T726-234q-47 47-110.279 74.5Q552.443-132 480-132q-69.075 0-132.537-26Q284-184 234-234q-1.667-1.778-2.833-4.444-1.167-2.667-1.167-5.512Q230-250 234.073-254q4.073-4 10.094-4 2.833 0 5.458 1.167Q252.25-255.667 254-254q47 44 105 69t121 25q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialUnknown5W100.displayName = 'AmauiIconMaterialUnknown5W100';

export default IconMaterialUnknown5W100;
