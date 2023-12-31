import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeatureSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeatureSearchW100Filled'

      short_name='FeatureSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m728-612 134 134-20 20-134-134q-17 17-40.5 24.5T620-560q-59 0-99.5-40.5T480-700q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 27-8.5 49T728-612Zm-108 24q47 0 79.5-32.5T732-700q0-47-32.5-79.5T620-812q-47 0-79.5 32.5T508-700q0 47 32.5 79.5T620-588Zm71 97 57 51v248q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h214q-4 11-4.5 26.5T401-695q0 91 63 152.5T621-481q17 0 34.5-2.5T691-491Z"/>
    </Icon>
  );
});

IconMaterialFeatureSearchW100Filled.displayName = 'AmauiIconMaterialFeatureSearchW100Filled';

export default IconMaterialFeatureSearchW100Filled;
