import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableEyeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableEyeW100'

      short_name='TableEye'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v373q-7-3-13.71-5.88-6.72-2.88-14.29-5.12v-138H592v124q-8 1-14.5 2t-13.5 3v-129H396v196H200v168h117q5 8 10 14.5t10 13.5H172Zm28-224h168v-168H200v168Zm0-196h560v-168H200v168ZM646.98-92Q579-92 521.5-126.5T426-218q38-57 95.52-91.5 57.52-34.5 125.5-34.5 67.98 0 125.48 34.5T868-218q-38 57-95.52 91.5Q714.96-92 646.98-92Zm-.12-28Q702-120 751-147t83-71q-34-44-82.86-71-48.85-27-104-27Q592-316 543-289t-83 71q34 44 82.86 71 48.85 27 104 27Zm.26-64Q633-184 623-193.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T671.12-194q-9.88 10-24 10Z"/>
    </Icon>
  );
});

IconMaterialTableEyeW100.displayName = 'AmauiIconMaterialTableEyeW100';

export default IconMaterialTableEyeW100;
