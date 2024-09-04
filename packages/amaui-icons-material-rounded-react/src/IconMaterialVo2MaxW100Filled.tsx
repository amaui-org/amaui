import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVo2MaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vo2MaxW100Filled'

      short_name='Vo2Max'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-212q-11 0-19.5-8.5T516-240v-152q0-11 8.5-19.5T544-420h92q11 0 19.5 8.5T664-392v152q0 11-8.5 19.5T636-212h-92Zm0-28h92v-152h-92v152Zm194-72q-6 0-10-4t-4-10q0-6 4-10t10-4h108q12 0 20 8t8 20v62q0 12-8 20t-20 8h-94v62h108q6 0 10 4t4 10q0 6-4 10t-10 4H752q-11 0-19.5-8.5T724-160v-62q0-12 8-20t20-8h94v-62H738ZM200-212q-45 0-76.5-32T92-321v-163q0-38 16.5-71.5T155-612l162-127q18-14 27.5-34t9.5-43v-38q0-6 4-10t10-4q6 0 10 4t4 10v38q0 23 10 43t28 34l161 127q23 18 40.5 42.5T639-516q0 14-7.5 25T608-480h-92q-25 0-42.5 17.5T456-420v135q0 10-9 12t-13-6q-3-9-4.5-19.5T428-321v-374l-60-49-61 49v374q0 45-31 77t-76 32Z"/>
    </Icon>
  );
});

IconMaterialVo2MaxW100Filled.displayName = 'AmauiIconMaterialVo2MaxW100Filled';

export default IconMaterialVo2MaxW100Filled;
