import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamW100'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212H306q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h348q5.95 0 9.975-4.035 4.025-4.035 4.025-10T663.975-208q-4.025-4-9.975-4H494v-358l80 80q4 4 9.5 4.5T594-490q5-5 5-10t-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5T366-490q5 5 10 5t10-5l80-80v358Zm14-274ZM192-372q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h576q26 0 43 17t17 43v296q0 26-17 43t-43 17H614q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h154q12 0 22-10t10-22v-296q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v296q0 12 10 22t22 10h154q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975-376q-4.025 4-9.975 4H192Z"/>
    </Icon>
  );
});

IconMaterialOpenJamW100.displayName = 'AmauiIconMaterialOpenJamW100';

export default IconMaterialOpenJamW100;
