import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallQualityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityW100Filled'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-132q-97 0-198.5-52t-184-134.5Q237-401 184.5-502T132-700v-42h161l33 151-106 97q56 94 125 162t163 120l102-107 134 28v159h-42Zm-47.852-348Q582-480 531-530.852q-51-50.851-51-123Q480-726 530.852-777q50.851-51 123-51Q726-828 777-777.148q51 50.851 51 123Q828-582 777.148-531q-50.851 51-123 51ZM640-540h28v-138h-28v138Zm14-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCallQualityW100Filled.displayName = 'AmauiIconMaterialCallQualityW100Filled';

export default IconMaterialCallQualityW100Filled;
