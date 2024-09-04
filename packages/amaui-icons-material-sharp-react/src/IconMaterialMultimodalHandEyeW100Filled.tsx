import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultimodalHandEyeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultimodalHandEyeW100Filled'

      short_name='MultimodalHandEye'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M267-119 74-311l33-35 111 24v-332h28v284h80v-174h28v174h80v-114h28v114h80v-14h28v131q0 56-39 95t-95 39H267Zm379.98-457Q579-576 521.5-610.5T426-702q38-57 95.52-91.5 57.52-34.5 125.5-34.5 67.98 0 125.48 34.5T868-702q-38 57-95.52 91.5-57.52 34.5-125.5 34.5Zm-.01-64Q673-640 691-657.97t18-44Q709-728 691.03-746t-44-18Q621-764 603-746.03t-18 44Q585-676 602.97-658t44 18Zm.15-28Q633-668 623-677.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T671.12-678q-9.88 10-24 10Z"/>
    </Icon>
  );
});

IconMaterialMultimodalHandEyeW100Filled.displayName = 'AmauiIconMaterialMultimodalHandEyeW100Filled';

export default IconMaterialMultimodalHandEyeW100Filled;
