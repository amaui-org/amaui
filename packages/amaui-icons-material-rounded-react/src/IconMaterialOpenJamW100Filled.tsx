import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamW100Filled'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-184q-6 0-10-4t-4-10q0-6 4-10t10-4h188v-358l80 80q4 4 9.5 4.5T594-490q5-5 5-10t-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5T366-490q5 5 10 5t10-5l80-80v198H192q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h576q26 0 43 17t17 43v296q0 26-17 43t-43 17H522v160h132q6 0 10 4t4 10q0 6-4 10t-10 4H306Z"/>
    </Icon>
  );
});

IconMaterialOpenJamW100Filled.displayName = 'AmauiIconMaterialOpenJamW100Filled';

export default IconMaterialOpenJamW100Filled;
