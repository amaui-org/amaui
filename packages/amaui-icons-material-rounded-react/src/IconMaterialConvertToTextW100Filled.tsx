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
      <path d="M320-626h320q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm106 454q-12.75 0-21.37-8.63Q396-189.25 396-202v-104h124q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H396v-132h244q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H388q-14-37-46.94-60.5T266-578h-64q-12.75 0-21.37-8.63Q172-595.25 172-608v-120q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H426Zm-280 40q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h96q-48-17-79-59.24-31-42.25-31-95.76 0-67.77 47.91-115.39Q227.81-478 296-478q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4-57 0-96.5 39.5T160-313.88q0 48.44 30.49 85.69Q220.99-190.93 268-181v-101q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v120q0 12.75-8.62 21.37Q278.75-132 266-132H146Z"/>
    </Icon>
  );
});

IconMaterialConvertToTextW100Filled.displayName = 'AmauiIconMaterialConvertToTextW100Filled';

export default IconMaterialConvertToTextW100Filled;
