import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConvertToTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConvertToTextW100Filled'

      short_name='ConvertToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h110q-48-17-79-59.24-31-42.25-31-95.76 0-67.77 47.91-115.39Q227.81-478 296-478v28q-57 0-96.5 39.5T160-313.88q0 48.44 30.49 85.69Q220.99-190.93 268-181v-115h28v164H132Zm174-494h348v-28H306v28Zm90 454v-134h138v-28H396v-132h258v-28H396v-84H172v-210h616v616H396Z"/>
    </Icon>
  );
});

IconMaterialConvertToTextW100Filled.displayName = 'AmauiIconMaterialConvertToTextW100Filled';

export default IconMaterialConvertToTextW100Filled;
