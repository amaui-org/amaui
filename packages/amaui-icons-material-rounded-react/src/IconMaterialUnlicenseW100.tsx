import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnlicenseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnlicenseW100'

      short_name='Unlicense'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m686-388-20-20q26-32 40-70t14-82q0-100-70-170t-170-70q-44 0-82 14t-70 40l-20-20q35-29 78.5-45.5T480-828q110 0 189 77.5T748-560q0 56-19 99.5T686-388ZM542-532l-90-90q6-3 14-4.5t14-1.5q30 0 49 20.5t19 47.5q0 6-1.5 14t-4.5 14Zm-62 358-150 43q-14 5-26-4.5T292-160v-210q-41-41-60.5-88.5T212-560q0-38 8-66t20-54L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5L668-252v92q0 15-12 24.5t-26 4.5l-150-43Zm0-146q32 0 59-8t39-14L262-658q-9 14-15.5 43t-6.5 55q0 100 70 170t170 70ZM320-158l160-46 160 46v-122l-40-40q-26 14-58.5 21t-61.5 7q-44 0-85.5-14T320-346v188Zm160-94Z"/>
    </Icon>
  );
});

IconMaterialUnlicenseW100.displayName = 'AmauiIconMaterialUnlicenseW100';

export default IconMaterialUnlicenseW100;
