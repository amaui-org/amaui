import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapW100Filled'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-483q-56 0-98 38.5t-42 104.817q0 53.199 42 104.941Q424-355 460-323q4.5 4 9.75 6t10.25 2q5 0 10-2t10-6q37-32 78.5-83.742Q620-458.484 620-511.683 620-578 578-616.5T480-655Zm-.141 183Q463-472 451.5-483.641t-11.5-28.5Q440-529 451.641-540.5t28.5-11.5Q497-552 508.5-540.359t11.5 28.5Q520-495 508.359-483.5t-28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialFileMapW100Filled.displayName = 'AmauiIconMaterialFileMapW100Filled';

export default IconMaterialFileMapW100Filled;
