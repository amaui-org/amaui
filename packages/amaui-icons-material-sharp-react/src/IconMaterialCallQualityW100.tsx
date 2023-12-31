import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallQualityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityW100'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-132q-97 0-198.5-52t-184-134.5Q237-401 184.5-502T132-700v-42h161l33 151-106 97q56 94 125 162t163 120l102-107 134 28v159h-42ZM206-520l89-80-25-114H160v14q0 41 12.5 87t33.5 93Zm328 320q41 21 88.5 30.5T702-160h14v-109l-96-19-86 88Zm120.148-280Q582-480 531-530.852q-51-50.851-51-123Q480-726 530.852-777q50.851-51 123-51Q726-828 777-777.148q51 50.851 51 123Q828-582 777.148-531q-50.851 51-123 51ZM640-540h28v-138h-28v138Zm14-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM206-520Zm328 320Z"/>
    </Icon>
  );
});

IconMaterialCallQualityW100.displayName = 'AmauiIconMaterialCallQualityW100';

export default IconMaterialCallQualityW100;
